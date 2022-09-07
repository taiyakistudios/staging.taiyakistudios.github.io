import { CreatePagesArgs } from 'gatsby'
import path from 'path'

export async function createPages({ actions, graphql }: CreatePagesArgs) {
  // Create project pages

  const { data: projectsData } = await graphql<any>(`
    query {
      allProjectsYaml {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  for (const { node } of projectsData.allProjectsYaml.edges) {
    const { slug } = node
    actions.createPage({
      path: `projects/${slug}`,
      component: path.resolve('./src/templates/projectPage.tsx'),
      context: {
        slug,
        imageFilesPath: `projects/${slug}`,
        heroFrontImagePath: `projects/${slug}/hero-front.png`,
        mosaicBgImagePath: `projects/${slug}/mosaic-bg.jpg`,
        discordFrontImagePath: `projects/${slug}/discord-front.png`,
      },
    })
  }
}
