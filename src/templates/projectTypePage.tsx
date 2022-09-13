import { graphql, HeadFC } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

import { DefaultHead, Footer, Layout } from '../components/shared'
import {
  GetAssetsSection,
  HeroSection,
  HowItWorksSection,
  KeyPointsSection,
} from '../components/templates/projectTypePage'

interface ImageSharpFile {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
}

interface Props {
  data: {
    projectsYaml: {
      slug: string
      name: string
      description: string
      [key: string]: any
    }
    projectTypesYaml: {
      slug: string
      name: string
      description: string
      [key: string]: any
    }
    heroFrontFile: ImageSharpFile
  }
}

function ProjectPage({ data }: Props) {
  const projectContent = data.projectsYaml
  const projectTypeContent = data.projectTypesYaml

  return (
    <Layout>
      <main>
        <HeroSection
          logoTitle={projectContent.name}
          title={projectTypeContent.hero.title}
          tagline={projectTypeContent.hero.tagline}
          ctaTitle={projectTypeContent.hero.cta_title}
          ctaLink={projectTypeContent.hero.cta_link}
          frontImage={data.heroFrontFile.childImageSharp.gatsbyImageData}
        />
        <KeyPointsSection
          title={projectTypeContent.key_points.title}
          blocks={projectTypeContent.key_points.blocks}
        />
        <HowItWorksSection
          title={projectTypeContent.how_it_works.title}
          tagline={projectTypeContent.how_it_works.tagline}
          items={projectTypeContent.how_it_works.items}
        />
        <GetAssetsSection
          title={projectTypeContent.get_assets.title}
          tagline={projectTypeContent.get_assets.tagline}
          ctaTitle={projectTypeContent.get_assets.cta_title}
          ctaLink={projectTypeContent.get_assets.cta_link}
        />
      </main>
      <Footer isLight={false} />
    </Layout>
  )
}

export default ProjectPage

export const Head: HeadFC<Props['data']> = function ({ data }) {
  const projectName = data.projectsYaml.name
  const projectTypeName = data.projectTypesYaml.name

  return (
    <DefaultHead
      title={`Taiyaki Studios - ${projectName} - ${projectTypeName}`}
      description={data.projectsYaml.description}
      ogImagePath={data.projectsYaml.metadata.og_image_path}
    />
  )
}

export const query = graphql`
  query ($projectSlug: String!, $slug: String!, $heroFrontImagePath: String!) {
    projectsYaml(slug: { eq: $projectSlug }) {
      slug
      name
      description
      metadata {
        og_image_path
      }
    }
    projectTypesYaml(project_slug: { eq: $projectSlug }, slug: { eq: $slug }) {
      slug
      name
      description
      hero {
        title
        tagline
        cta_title
        cta_link
      }
      key_points {
        title
        blocks {
          title
          body
        }
      }
      how_it_works {
        title
        tagline
        items {
          title
          body
        }
      }
      get_assets {
        title
        tagline
        cta_title
        cta_link
      }
    }
    heroFrontFile: file(relativePath: { eq: $heroFrontImagePath }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, width: 480)
      }
    }
  }
`
