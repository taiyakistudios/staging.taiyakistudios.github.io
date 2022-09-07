import type { GatsbyConfig } from 'gatsby'

const plugins = [
  'gatsby-plugin-emotion',
  'gatsby-plugin-image',
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  'gatsby-transformer-yaml',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: './src/images/',
    },
    __key: 'images',
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'content',
      path: './src/content/',
    },
  },
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /images/,
      },
    },
  },
]

if (process.env.NO_INDEX === 'true') {
  plugins.push('gatsby-plugin-no-index')
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Taiyaki Studios`,
    siteUrl: `https://taiyakistudios.com`,
    description: 'Avatars, production tools, and community resources for next-gen media',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins,
}

export default config