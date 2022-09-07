import styled from '@emotion/styled'
import React from 'react'

import {
  H2,
  Overline,
  SectionContainer,
  SectionContentWrapper,
  SectionCtaButton,
  SectionTextWrapper,
  Tagline,
} from '../../shared'

const MainContainer = styled(SectionContainer)`
  min-height: auto;
`

const MainTextWrapper = styled(SectionTextWrapper)`
  margin-top: ${({ theme }) => theme.spacing(5)};

  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-top: ${({ theme }) => theme.spacing(9)};
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    width: 800px;
  }
`

const MainCtaButton = styled(SectionCtaButton)`
  margin-top: ${({ theme }) => theme.spacing(4)};
`

const BottomContainer = styled(SectionContainer)`
  background-color: #323232;
  color: ${({ theme }) => theme.colors.common.white};
  min-height: 0;
`

const BottomContentWrapper = styled(SectionContentWrapper)`
  margin: ${({ theme }) => theme.spacing(5, 'auto')};

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin: ${({ theme }) => theme.spacing(6, 'auto')};
  }
`

const BottomGrid = styled.div`
  display: grid;
  row-gap: ${({ theme }) => theme.spacing(5)};

  ${({ theme }) => theme.breakpoints.up('sm')} {
    grid-template-rows: auto;
    row-gap: unset;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: ${({ theme }) => theme.spacing(5)};
  }
`

const BottomGirdItem = styled.div``

const BottomGridItemTitle = styled.span`
  margin: 0;
  line-height: 1.5;
  font-weight: 700;
`

const BottomGridItemBody = styled.p`
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 0;

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-top: ${({ theme }) => theme.spacing(3)};
  }
`

interface Props {
  overline: string
  title: string
  tagline: string
  ctaTitle: string
  ctaLink: string
  blocks: {
    title: string
    body: string
  }[]
}

export function BusinessSection({
  overline,
  title,
  tagline,
  ctaTitle,
  ctaLink,
  blocks,
}: Props) {
  function renderGridItems() {
    return blocks.map((block, index) => (
      <BottomGirdItem key={index}>
        <BottomGridItemTitle>{block.title}</BottomGridItemTitle>
        <BottomGridItemBody>{block.body}</BottomGridItemBody>
      </BottomGirdItem>
    ))
  }

  return (
    <>
      <MainContainer>
        <SectionContentWrapper>
          <Overline>{overline}</Overline>
          <MainTextWrapper>
            <H2>{title}</H2>
            <Tagline>{tagline}</Tagline>
            <MainCtaButton href={ctaLink} target="_blank" rel="noopener noreferrer">
              {ctaTitle}
            </MainCtaButton>
          </MainTextWrapper>
        </SectionContentWrapper>
      </MainContainer>
      <BottomContainer>
        <BottomContentWrapper>
          <BottomGrid>{renderGridItems()}</BottomGrid>
        </BottomContentWrapper>
      </BottomContainer>
    </>
  )
}
