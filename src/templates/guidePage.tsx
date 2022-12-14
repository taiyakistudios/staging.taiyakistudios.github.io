import { graphql } from 'gatsby'
import React from 'react'

import {
  createMarkdownPageHead,
  MarkdownPage,
  MarkdownPageProps,
} from '../components/templates/shared'

export function GuidePage(props: MarkdownPageProps) {
  return <MarkdownPage {...props} overline="Guides" />
}

export default GuidePage

export const Head = createMarkdownPageHead({ overline: 'Guides' })

export const query = graphql`
  query ($slug: String!, $imageFilesPath: String!) {
    ...MarkdownPageDataQuery
  }
`
