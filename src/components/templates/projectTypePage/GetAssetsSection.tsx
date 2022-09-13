import styled from '@emotion/styled'
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
  background-color: #2a2a2a;
`

const ContentWrapper = styled(SectionContentWrapper)`
  color: ${({ theme }) => theme.colors.common.white};
  align-items: center;
`

const TextWrapper = styled(SectionTextWrapper)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

interface Props {
  title: string
  tagline: string
  ctaTitle: string
  ctaLink: string
}

export function GetAssetsSection({ title, tagline, ctaTitle, ctaLink }: Props) {
  return (
    <Container>
      <ContentWrapper>
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
