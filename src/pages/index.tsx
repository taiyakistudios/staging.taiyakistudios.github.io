import type { HeadFC } from 'gatsby'
import * as React from 'react'
import styled from '@emotion/styled'

import content from '../content/index.yaml'
import { Layout, NavBar } from '../components/shared'

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(3, 2)};
`

function IndexPage() {
  return (
    <Layout>
      <NavBar />
      <main>
        <HeroSection>
          <h1>{content.hero.title}</h1>
          <p>{content.hero.tagline}</p>
        </HeroSection>
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>{content.title}</title>
