import { useStaticQuery, graphql } from 'gatsby'

interface SiteMetadata {
  title: string
  description: string
  siteDomain: string
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
            siteDomain
            siteUrl
          }
        }
      }
    `,
  )
  return site.siteMetadata
}

export default useSiteMetadata
