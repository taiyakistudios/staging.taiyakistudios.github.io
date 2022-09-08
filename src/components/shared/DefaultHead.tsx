import React from 'react'

import content from '../../content/default.yaml'

interface Props {
  title?: string
  children?: React.ReactNode
}

export function DefaultHead({ title = content.seo.title, children }: Props) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={content.seo.description} />
      <meta property="og:image" content="/og-image.jpg" />
      <meta property="og:image:width" content="500" />
      <meta property="og:image:width" content="333" />
      {children}
      <link
        id="font-css"
        rel="stylesheet"
        type="text/css"
        href="https://cloud.typography.com/8003020/6925432/css/fonts.css"
      />
    </>
  )
}
