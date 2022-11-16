import { CreatePagesArgs } from 'gatsby'
import path from 'path'

export async function createPages({ actions, graphql }: CreatePagesArgs) {
  const { data } = await graphql<any>(`
    query AllPagesDataQuery {
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
      allGuidesMarkdown: allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "guide" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
              date
              title
            }
          }
        }
      }
    }
  `)

  // Create project pages

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

  // Create project type pages

  for (const { node } of data.allProjectTypesYaml.edges) {
    const { slug, project_slug } = node

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

  // Create guide pages

  for (const { node } of data.allGuidesMarkdown.edges) {
    const { slug } = node.frontmatter

    actions.createPage({
      path: `guides/${slug}`,
      component: path.resolve('./src/templates/guidePage.tsx'),
      context: {
        slug,
        imageFilesPath: `guides/${slug}`,
      },
    })
  }
}
