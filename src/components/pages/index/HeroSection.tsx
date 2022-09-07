import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import {
  ContainedButton,
  H1,
  NavBar,
  SectionContainer,
  SectionContentWrapper,
  SectionCtaButtonsWrapper,
  SectionTextWrapper,
  Tagline,
} from '../../shared'

const StyledContainer = styled(SectionContainer)`
  position: relative;
  background-color: #eee;
  min-height: 90vh;
`

const ImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.7);
`

const ContentWrapper = styled(SectionContentWrapper)`
  margin-top: ${({ theme }) => theme.spacing(2)};
  z-index: 2;
  color: ${({ theme }) => theme.colors.common.white};

  ${({ theme }) => theme.breakpoints.up('xs')} {
    margin-top: ${({ theme }) => theme.spacing(3)};
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    margin-top: ${({ theme }) => theme.spacing(5)};
  }
`

const TextWrapper = styled(SectionTextWrapper)`
  ${({ theme }) => theme.breakpoints.up('xs')} {
    margin-bottom: auto;
    padding-top: ${({ theme }) => theme.spacing(3)};
  }

  ${({ theme }) => theme.breakpoints.up('sm')} {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    text-align: center;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    width: 720px;
  }
`

const StyledCtaButton = styled(ContainedButton)`
  ${({ theme }) => theme.breakpoints.up('sm')} {
    justify-self: center;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    justify-self: flex-start;
  }
`

interface Props {
  title: string
  tagline: string
  mainCtaTitle: string
  mainCtaLink: string
  secondaryCtaTitle: string
  secondaryCtaLink: string
}

export function HeroSection({
  title,
  tagline,
  mainCtaTitle,
  mainCtaLink,
  secondaryCtaTitle,
  secondaryCtaLink,
}: Props) {
  return (
    <StyledContainer>
      <StaticImage
        src="../../../images/hero-bg.jpg"
        alt="Hero image background"
        layout="fullWidth"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      />
      <ImageOverlay />
      <ContentWrapper>
        <NavBar isLight />
        <TextWrapper>
          <H1 as="h1">{title}</H1>
          <Tagline>{tagline}</Tagline>
          <SectionCtaButtonsWrapper>
            <StyledCtaButton
              href={mainCtaLink}
              target="_blank"
              rel="noopener noreferrer"
              isLight
            >
              {mainCtaTitle}
            </StyledCtaButton>
            <StyledCtaButton
              href={secondaryCtaLink}
              target="_blank"
              rel="noopener noreferrer"
              isOutline
              isLight
            >
              {secondaryCtaTitle}
            </StyledCtaButton>
          </SectionCtaButtonsWrapper>
        </TextWrapper>
      </ContentWrapper>
    </StyledContainer>
  )
}
