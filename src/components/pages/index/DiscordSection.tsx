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
  background-color: #212121;
  color: ${({ theme }) => theme.colors.common.white};
`

const TextWrapper = styled(SectionTextWrapper)`
  margin-top: 0;
`

interface Props {
  title: string
  tagline: string
  ctaTitle: string
  ctaLink: string
}

export function DiscordSection({ title, tagline, ctaTitle, ctaLink }: Props) {
  return (
    <Container>
      <SectionContentWrapper>
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
      </SectionContentWrapper>
    </Container>
  )
}
