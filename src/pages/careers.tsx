import { graphql, HeadFC } from 'gatsby'
import React from 'react'

import { CareersSection, HeroSection } from '../components/pages/careers'
import { DefaultHead, Footer, Layout } from '../components/shared'
import { MarkdownSection } from '../components/templates/shared/markdownPage/MarkdownSection'
import content from '../content/yaml/careers.yaml'

export interface Props {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: {
            slug: string
            title: string
            description: string
          }
        }
      }[]
    }
  }
}

function CareersPage({ data }: Props) {
  return (
    <Layout>
      <main>
        <HeroSection title={content.hero.title} tagline={content.hero.tagline} />
        <MarkdownSection rawMarkdownBody={content.markdown} imagesByName={{}} />
        <CareersSection
          items={data.allMarkdownRemark.edges.map((edge) => edge.node.frontmatter)}
        />
        <Footer />
      </main>
    </Layout>
  )
}

export default CareersPage

export const Head: HeadFC = function () {
  return <DefaultHead title={content.title} description={content.tagline} />
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "career" }, published: { eq: true } } }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            description
          }
        }
      }
    }
  }
`
