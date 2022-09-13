import { CreatePagesArgs } from 'gatsby'
import path from 'path'

export async function createPages({ actions, graphql }: CreatePagesArgs) {
  // Create project pages

  const { data } = await graphql<any>(`
    query {
      allProjectsYaml {
        edges {
          node {
            slug
          }
        }
      }
      allProjectTypesYaml {
        edges {
          node {
            slug
            project_slug
          }
        }
      }
    }
  `)

  for (const { node } of data.allProjectsYaml.edges) {
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

  for (const { node } of data.allProjectTypesYaml.edges) {
    const { slug, project_slug } = node
    console.log(slug)

    actions.createPage({
      path: `projects/${project_slug}/${slug}`,
      component: path.resolve('./src/templates/projectTypePage.tsx'),
      context: {
        projectSlug: project_slug,
        slug,
        heroFrontImagePath: `project-types/${slug}/hero-front.png`,
      },
    })
  }
}
