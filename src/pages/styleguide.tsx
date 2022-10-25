import type { HeadFC } from 'gatsby'
import styled from '@emotion/styled'
import React from 'react'

import { H1, H2, H3, H4, H5, H6, Tagline, Overline } from '../components/shared'

import { DefaultHead, Layout } from '../components/shared'
import content from '../content/about.yaml'

const Wrapper = styled.main`
  background: rgba(0, 0, 0, 0.1);
  height: 100%;
  min-height: 100%;
  padding: 100px 0;
`

const Main = styled.main`
  max-width: 1080px;
  margin: 0 auto;
`

const Hero = styled.main`
  margin-top: 100px;
  margin-bottom: 100px;
`

const Section = styled.div`
  max-width: 1080px;
  padding: 20px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 1);
`

const SectionTitle = styled.div`
  font-size: 21px;
  font-weight: 800;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

const SectionExample = styled.div`
  margin-bottom: 20px;
`

const SectionCode = styled.code`
  display: block;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 18px;
  background: rgba(0, 0, 0, 0.05);
`

function copyToClipboard(val: string) {
  navigator.clipboard.writeText(val)
}

const placeholder_full = 'Yaki lorem ipsum dolor sit amet, consectetur elit'
const placeholder_bare = 'TEXT'

const components = [
  {
    section: 'Headings',
    name: 'H1',
    tag: H1,
    raw_code: `<H1>${placeholder_bare}</H1>`,
    code: <H1>{placeholder_bare}</H1>,
  },
  {
    section: 'Headings',
    name: 'H2',
    tag: H2,
    raw_code: `<H2>${placeholder_bare}</H2>`,
    code: <H2>{placeholder_bare}</H2>,
  },
  {
    section: 'Headings',
    name: 'H3',
    tag: H3,
    raw_code: `<H3>${placeholder_bare}</H3>`,
    code: <H3>{placeholder_bare}</H3>,
  },
  {
    section: 'Headings',
    name: 'H4',
    tag: H4,
    raw_code: `<H4>${placeholder_bare}</H4>`,
    code: <H4>{placeholder_bare}</H4>,
  },
  {
    section: 'Headings',
    name: 'H5',
    tag: H5,
    raw_code: `<H5>${placeholder_bare}</H5>`,
    code: <H5>{placeholder_bare}</H5>,
  },
  {
    section: 'Headings',
    name: 'H6',
    tag: H6,
    raw_code: `<H6>${placeholder_bare}</H6>`,
    code: <H6>{placeholder_bare}</H6>,
  },
]

// const componentBySections = components.group(({ section }) => section)

function StyleguidePage() {
  return (
    <Layout>
      <Wrapper>
        <Main>
          <Hero>
            <H1>Styleguide</H1>
          </Hero>
          {components.map((component) => (
            <Section>
              <SectionTitle>{component.name}</SectionTitle>
              <SectionExample>
                <component.tag>{placeholder_full}</component.tag>
              </SectionExample>
              <SectionCode>{component.raw_code}</SectionCode>
              <button onClick={() => copyToClipboard(component.raw_code)}>
                Copy to clipboard
              </button>
            </Section>
          ))}
        </Main>
      </Wrapper>
    </Layout>
  )
}

export default StyleguidePage

export const Head: HeadFC = function () {
  return <DefaultHead title={content.title} />
}
