import { graphql, HeadFC } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

import { DefaultHead, Footer, Layout } from '../components/shared'
import {
  DiscordSection,
  GeneralInfoSection,
  HeroSection,
  ProjectTypesSection,
  StoryboardSection,
} from '../components/templates/projectPage'

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
      [key: string]: any
    }
    heroFrontFile: ImageSharpFile
    mosaicBgFile: ImageSharpFile
    discordFrontFile: ImageSharpFile
    imageFiles: {
      edges: {
        node: ImageSharpFile & { name: string }
      }[]
    }
  }
}

function ProjectPage({ data }: Props) {
  const content = data.projectsYaml
  const imageByName = data.imageFiles.edges.reduce<Record<string, IGatsbyImageData>>(
    (result, current) => ({
      ...result,
      [current.node.name]: current.node.childImageSharp.gatsbyImageData,
    }),
    {},
  )

  const storyboardItems = data.projectsYaml.storyboard.items.map((item: any) => {
    if (item.imageFileName != null) {
      return { image: imageByName[item.imageFileName] }
    } else {
      return { title: item.title, body: item.body }
    }
  })

  return (
    <Layout>
      <main>
        <HeroSection
          logoTitle={content.name}
          title={content.hero.title}
          tagline={content.hero.tagline}
          mainCtaTitle={content.hero.main_cta_title}
          mainCtaLink={content.hero.main_cta_link}
          secondaryCtaTitle={content.hero.secondary_cta_title}
          secondaryCtaLink={content.hero.secondary_cta_link}
          frontImage={data.heroFrontFile.childImageSharp.gatsbyImageData}
        />
        <GeneralInfoSection
          title={content.general_info.title}
          tagline={content.general_info.tagline}
          mosaicBgImage={data.mosaicBgFile.childImageSharp.gatsbyImageData}
          blocks={content.general_info.blocks}
        />
        <StoryboardSection title={content.storyboard.title} items={storyboardItems} />
        <ProjectTypesSection
          title={content.project_types.title}
          tagline={content.project_types.tagline}
          items={content.project_types.items}
        />
        <DiscordSection
          title={content.discord.title}
          tagline={content.discord.tagline}
          ctaTitle={content.discord.cta_title}
          ctaLink={content.discord.cta_link}
          frontImage={data.discordFrontFile.childImageSharp.gatsbyImageData}
        />
      </main>
      <Footer isLight={false} />
    </Layout>
  )
}

export default ProjectPage

export const Head: HeadFC<Props['data']> = function ({ data }) {
  const name = data.projectsYaml.name

  return (
    <DefaultHead
      title={`Taiyaki Studios - ${name}`}
      description={data.projectsYaml.description}
      ogImagePath={data.projectsYaml.metadata.og_image_path}
    />
  )
}

export const query = graphql`
  query (
    $slug: String!
    $heroFrontImagePath: String!
    $mosaicBgImagePath: String
    $discordFrontImagePath: String
    $imageFilesPath: String!
  ) {
    projectsYaml(slug: { eq: $slug }) {
      slug
      name
      description
      metadata {
        og_image_path
      }
      hero {
        title
        tagline
        main_cta_title
        main_cta_link
        secondary_cta_title
        secondary_cta_link
      }
      general_info {
        title
        tagline
        blocks {
          title
          body
        }
      }
      storyboard {
        title
        items {
          title
          body
          imageFileName
        }
      }
      project_types {
        title
        tagline
        items {
          id
          title
          body
        }
      }
      discord {
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
    mosaicBgFile: file(relativePath: { eq: $mosaicBgImagePath }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, width: 1080)
      }
    }
    discordFrontFile: file(relativePath: { eq: $discordFrontImagePath }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, width: 480)
      }
    }
    imageFiles: allFile(filter: { relativeDirectory: { eq: $imageFilesPath } }) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, width: 480)
          }
        }
      }
    }
  }
`
