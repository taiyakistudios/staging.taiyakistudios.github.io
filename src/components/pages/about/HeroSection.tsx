import styled from '@emotion/styled'
import React from 'react'

import {
  H1,
  NavBar,
  SectionContainer,
  SectionContentWrapper,
  SectionTextWrapper,
  Tagline,
} from '../../shared'

const StyledContainer = styled(SectionContainer)`
  position: relative;
  min-height: auto;

  ${({ theme }) => theme.breakpoints.up('xs')} {
    min-height: 50vh;
  }
`

const StyledContentWrapper = styled(SectionContentWrapper)`
  margin-top: ${({ theme }) => theme.spacing(2)};
  z-index: 2;

  ${({ theme }) => theme.breakpoints.up('xs')} {
    margin-top: ${({ theme }) => theme.spacing(3)};
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    margin-top: ${({ theme }) => theme.spacing(5)};
  }
`

const StyledTextWrapper = styled(SectionTextWrapper)`
  margin-top: ${({ theme }) => theme.spacing(3)};

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-top: ${({ theme }) => theme.spacing(7)};
  }
`

interface Props {
  title: string
  tagline: string
}

export function HeroSection({ title, tagline }: Props) {
  return (
    <StyledContainer>
      <StyledContentWrapper>
        <NavBar />
        <StyledTextWrapper>
          <H1 as="h1">{title}</H1>
          <Tagline>{tagline}</Tagline>
        </StyledTextWrapper>
      </StyledContentWrapper>
    </StyledContainer>
  )
}
