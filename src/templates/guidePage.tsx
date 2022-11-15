import React from 'react'
import { graphql, HeadFC } from 'gatsby'

import { DefaultHead, Footer, Layout } from '../components/shared'
import { HeroSection, MarkdownSection } from '../components/templates/guidePage'
import { IGatsbyImageData } from 'gatsby-plugin-image'

interface ImageSharpFile {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
}

interface Props {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        description: string
        date: string
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

export function GuidePage({ data }: Props) {
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
        <HeroSection title={frontmatter.title} tagline={frontmatter.description} />
        <MarkdownSection rawMarkdownBody={rawMarkdownBody} imagesByName={imagesByName} />
      </main>
      <Footer isLight />
    </Layout>
  )
}

export default GuidePage

export const Head: HeadFC<Props['data']> = function ({ data }) {
  const { title, description } = data.markdownRemark.frontmatter

  return (
    <DefaultHead
      title={`Taiyaki Studios - Guides - ${title}`}
      description={description}
    />
  )
}

export const query = graphql`
  query ($slug: String!, $imageFilesPath: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
      }
      rawMarkdownBody
    }
    imageFiles: allFile(
      filter: { relativeDirectory: { eq: $imageFilesPath }, ext: { in: [".png"] } }
    ) {
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
  }
`
