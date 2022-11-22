import { graphql, HeadFC } from 'gatsby'
import React from 'react'

import { GuidesSection, HeroSection } from '../components/pages/guides'
import { DefaultHead, Footer, Layout } from '../components/shared'
import content from '../content/yaml/guides.yaml'

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

function GuidesPage({ data }: Props) {
  return (
    <Layout>
      <main>
        <HeroSection title={content.hero.title} tagline={content.hero.tagline} />
        <GuidesSection
          items={data.allMarkdownRemark.edges.map((edge) => edge.node.frontmatter)}
        />
        <Footer />
      </main>
    </Layout>
  )
}

export default GuidesPage

export const Head: HeadFC = function () {
  return <DefaultHead title={content.title} description={content.tagline} />
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "guide" }, published: { eq: true } } }
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
