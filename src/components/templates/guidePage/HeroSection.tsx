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

interface Props {
  title: string
  tagline: string
}

export function HeroSection({ title, tagline }: Props) {
  return (
    <StyledContainer>
      <ContentWrapper>
        <NavBar />
        <TextWrapper>
          <H1>{title}</H1>
          <Tagline>{tagline}</Tagline>
        </TextWrapper>
      </ContentWrapper>
    </StyledContainer>
  )
}
