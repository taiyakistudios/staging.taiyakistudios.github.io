import { useStaticQuery, graphql } from 'gatsby'

interface SiteMetadata {
  title: string
  description: string
  siteUrl: string
}

const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `,
  )
  return site.siteMetadata
}

export default useSiteMetadata
