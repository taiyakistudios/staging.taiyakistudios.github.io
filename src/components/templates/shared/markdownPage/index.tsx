import { graphql, HeadFC } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

import { DefaultHead, Footer, Layout } from '../../../shared'
import { HeroSection } from './HeroSection'
import { MarkdownSection } from './MarkdownSection'

interface ImageSharpFile {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
}

export interface MarkdownPageProps {
  overline: string
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        description: string
      }
      rawMarkdownBody: string
    }
    imageFiles: {
      edges: {
        node: ImageSharpFile & { name: string; ext: string }
      }[]
    }
  }
}

export function MarkdownPage({ overline, data }: MarkdownPageProps) {
  const { markdownRemark, imageFiles } = data
  const { frontmatter, rawMarkdownBody } = markdownRemark

  const imagesByName = imageFiles.edges.reduce<Record<string, IGatsbyImageData>>(
    (result, current) => ({
      ...result,
      [current.node.name + current.node.ext]:
        current.node.childImageSharp.gatsbyImageData,
    }),
    {},
  )

  return (
    <Layout>
      <main>
        <HeroSection
          overline={overline}
          title={frontmatter.title}
          tagline={frontmatter.description}
        />
        <MarkdownSection rawMarkdownBody={rawMarkdownBody} imagesByName={imagesByName} />
      </main>
      <Footer isLight />
    </Layout>
  )
}

export interface MarkdownPageHeadProps {
  overline: string
}

export const createMarkdownPageHead: (
  props: MarkdownPageHeadProps,
) => HeadFC<MarkdownPageProps['data']> = function ({ overline }) {
  return function ({ data }) {
    const { title, description } = data.markdownRemark.frontmatter

    return (
      <DefaultHead
        title={`Taiyaki Studios - ${overline} - ${title}`}
        description={description}
      />
    )
  }
}

export const query = graphql`
  fragment MarkdownPageRemarkData on MarkdownRemark {
    frontmatter {
      slug
      title
      description
    }
    rawMarkdownBody
  }

  fragment MarkdownPageFileConnection on FileConnection {
    edges {
      node {
        name
        ext
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }

  fragment MarkdownPageDataQuery on Query {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      ...MarkdownPageRemarkData
    }
    imageFiles: allFile(
      filter: {
        relativeDirectory: { eq: $imageFilesPath }
        ext: { in: [".png", ".jpg"] }
      }
    ) {
      ...MarkdownPageFileConnection
    }
  }
`
