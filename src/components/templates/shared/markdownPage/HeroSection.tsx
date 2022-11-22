import styled from '@emotion/styled'
import React from 'react'

import {
  H1,
  NavBar,
  Overline,
  SectionContainer,
  SectionContentWrapper,
  SectionTextWrapper,
  Tagline,
} from '../../../shared'

const StyledContainer = styled(SectionContainer)`
  position: relative;
  min-height: 0;
  background-color: #f5f5f5;
`

const ContentWrapper = styled(SectionContentWrapper)`
  margin-top: ${({ theme }) => theme.spacing(2)};
  z-index: 2;

  ${({ theme }) => theme.breakpoints.up('xs')} {
    margin-top: ${({ theme }) => theme.spacing(3)};
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    margin-top: ${({ theme }) => theme.spacing(5)};
  }
`

const TextWrapper = styled(SectionTextWrapper)`
  margin-top: ${({ theme }) => theme.spacing(2)};

  ${({ theme }) => theme.breakpoints.up('xs')} {
    margin-top: ${({ theme }) => theme.spacing(3)};
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    width: 720px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    margin-top: ${({ theme }) => theme.spacing(5)};
  }
`

const Title = styled(H1)`
  margin-top: ${({ theme }) => theme.spacing(1)};
`

interface Props {
  overline: string
  title: string
  tagline: string
}

export function HeroSection({ overline, title, tagline }: Props) {
  return (
    <StyledContainer>
      <ContentWrapper>
        <NavBar />
        <TextWrapper>
          <Overline>{overline}</Overline>
          <Title>{title}</Title>
          <Tagline>{tagline}</Tagline>
        </TextWrapper>
      </ContentWrapper>
    </StyledContainer>
  )
}
