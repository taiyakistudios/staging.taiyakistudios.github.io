import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import {
  H2,
  SectionContainer,
  SectionContentWrapper,
  SectionCtaButton,
  SectionTextWrapper,
  Tagline,
} from '../../shared'

const Container = styled(SectionContainer)`
  min-height: auto;
  background-color: #eee;
`

const ContentWrapper = styled(SectionContentWrapper)`
  ${({ theme }) => theme.breakpoints.up('md')} {
    flex-direction: row-reverse;
  }
`

const TextWrapper = styled(SectionTextWrapper)`
  margin-top: ${({ theme }) => theme.spacing(5)};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.breakpoints.up('md')} {
    text-align: left;
    align-items: flex-start;
    flex: 1;
  }
`

interface Props {
  title: string
  tagline: string
  ctaTitle: string
  ctaLink: string
}

export function HiringSection({ title, tagline, ctaTitle, ctaLink }: Props) {
  return (
    <Container>
      <ContentWrapper>
        <StaticImage
          src="../../../images/hiring-front.png"
          alt="Hiring front image"
          style={{ flex: 1 }}
        />
        <TextWrapper>
          <H2>{title}</H2>
          <Tagline>{tagline}</Tagline>
          <SectionCtaButton href={ctaLink} target="_blank" rel="noopener noreferrer">
            {ctaTitle}
          </SectionCtaButton>
        </TextWrapper>
      </ContentWrapper>
    </Container>
  )
}
