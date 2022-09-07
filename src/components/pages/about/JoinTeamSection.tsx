import styled from '@emotion/styled'
import React from 'react'

import { SectionContainer, SectionContentWrapper, SectionCtaButton } from '../../shared'

const Container = styled(SectionContainer)`
  background-color: rgba(33, 33, 33, 1);
  min-height: auto;
`

const ContentWrapper = styled(SectionContentWrapper)`
  align-items: center;
`

const Title = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.common.white};

  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 2.5rem;
  }
`

const CtaButton = styled(SectionCtaButton)`
  margin-top: ${({ theme }) => theme.spacing(3)};

  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-top: ${({ theme }) => theme.spacing(4)};
  }
`

interface Props {
  title: string
  ctaTitle: string
  ctaLink: string
}

export function JoinTeamSection({ title, ctaTitle, ctaLink }: Props) {
  return (
    <Container>
      <ContentWrapper>
        <Title>{title}</Title>
        <CtaButton href={ctaLink} target="_blank" rel="noopener noreferrer" isLight>
          {ctaTitle}
        </CtaButton>
      </ContentWrapper>
    </Container>
  )
}
