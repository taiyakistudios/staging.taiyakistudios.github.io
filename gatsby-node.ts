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
      allMarkdownRemark(filter: { frontmatter: { published: { eq: true } } }) {
        edges {
          node {
            frontmatter {
              category
              slug
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

  // Create markdown pages

  for (const { node } of data.allMarkdownRemark.edges) {
    const { category, slug } = node.frontmatter

    if (category === 'guide') {
      actions.createPage({
        path: `guides/${slug}`,
        component: path.resolve('./src/templates/guidePage.tsx'),
        context: {
          slug,
          imageFilesPath: `guides/${slug}`,
        },
      })
    } else if (category === 'career') {
      actions.createPage({
        path: `careers/${slug}`,
        component: path.resolve('./src/templates/careerPage.tsx'),
        context: {
          slug,
          imageFilesPath: `careers/${slug}`,
        },
      })
    } else {
      throw new Error(`Unknown markdown page category ${category}`)
    }
  }
}
