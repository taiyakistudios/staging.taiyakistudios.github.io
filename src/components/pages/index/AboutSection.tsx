import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import {
  ContainedGatsbyButton,
  H2,
  SectionContainer,
  SectionContentWrapper,
  SectionTextWrapper,
  Tagline,
} from '../../shared'

const Container = styled(SectionContainer)`
  min-height: auto;
  background-color: #212121;
  color: ${({ theme }) => theme.colors.common.white};
`

const ImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: rgba(0, 0, 0, 0.7);

  ${({ theme }) => theme.breakpoints.up('sm')} {
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5));
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  }
`

const TextWrapper = styled(SectionTextWrapper)`
  margin-top: 0;
  z-index: 3;
`

const CtaButton = styled(ContainedGatsbyButton)`
  margin-top: ${({ theme }) => theme.spacing(4)};
`

interface Props {
  title: string
  tagline: string
  ctaTitle: string
}

export function AboutSection({ title, tagline, ctaTitle }: Props) {
  return (
    <Container>
      <StaticImage
        src="../../../images/about-bg.jpg"
        alt="About image background"
        layout="fullWidth"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      />
      <ImageOverlay />
      <SectionContentWrapper>
        <TextWrapper>
          <H2>{title}</H2>
          <Tagline>{tagline}</Tagline>
          <CtaButton to="/about" islight="true">
            {ctaTitle}
          </CtaButton>
        </TextWrapper>
      </SectionContentWrapper>
    </Container>
  )
}
