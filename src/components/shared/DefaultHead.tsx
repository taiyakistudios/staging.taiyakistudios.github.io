import React from 'react'

import content from '../../content/default.yaml'
import useSiteMetadata from '../../hooks/useSiteMetadata'

interface Props {
  title?: string
  description?: string
  ogImagePath?: string
  children?: React.ReactNode
}

export function DefaultHead({
  title = content.seo.title,
  description = content.seo.description,
  ogImagePath = '/og-image.jpg',
  children,
}: Props) {
  const { siteDomain, siteUrl } = useSiteMetadata()

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Facebook metadata */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={siteUrl + ogImagePath} />

      {/* Twitter metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={siteUrl + ogImagePath} />

      {/* Custom children */}
      {children}

      {/* Custom font */}
      <link
        id="font-css"
        rel="stylesheet"
        type="text/css"
        href="https://cloud.typography.com/8003020/6925432/css/fonts.css"
      />

      {/* Analytics */}
      {siteDomain && (
        <script
          defer
          data-domain={siteDomain}
          src="https://plausible.io/js/plausible.js"
        />
      )}
    </>
  )
}
