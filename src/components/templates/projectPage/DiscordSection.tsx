import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
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
  background-color: #1c1c1c;
`

const ContentWrapper = styled(SectionContentWrapper)`
  color: ${({ theme }) => theme.colors.common.white};

  ${({ theme }) => theme.breakpoints.up('md')} {
    flex-direction: row-reverse;
    align-items: center;
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
  frontImage: IGatsbyImageData
}

export function DiscordSection({ title, tagline, ctaTitle, ctaLink, frontImage }: Props) {
  return (
    <Container>
      <ContentWrapper>
        <GatsbyImage
          image={frontImage}
          alt="Discord front image"
          objectFit="contain"
          style={{ flex: 1 }}
        />
        <TextWrapper>
          <H2>{title}</H2>
          <Tagline>{tagline}</Tagline>
          <SectionCtaButton
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            isLight
          >
            {ctaTitle}
          </SectionCtaButton>
        </TextWrapper>
      </ContentWrapper>
    </Container>
  )
}
