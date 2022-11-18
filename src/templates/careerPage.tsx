import { graphql } from 'gatsby'
import React from 'react'

import {
  createMarkdownPageHead,
  MarkdownPage,
  MarkdownPageProps,
} from '../components/templates/shared'

export function CareerPage(props: MarkdownPageProps) {
  return <MarkdownPage {...props} overline="Careers" />
}

export default CareerPage

export const Head = createMarkdownPageHead({ overline: 'Careers' })

export const query = graphql`
  query ($slug: String!, $imageFilesPath: String!) {
    ...MarkdownPageDataQuery
  }
`
