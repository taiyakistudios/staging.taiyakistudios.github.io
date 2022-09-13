import styled from '@emotion/styled'
import React from 'react'

import {
  H2,
  SectionContainer,
  SectionContentWrapper,
  SectionTextWrapper,
} from '../../shared'

const MainContainer = styled(SectionContainer)`
  background-color: #2b2b2b;
  color: ${({ theme }) => theme.colors.common.white};
  position: relative;
  min-height: 0;
`

const TextWrapper = styled(SectionTextWrapper)`
  z-index: 3;
  ${({ theme }) => theme.breakpoints.up('md')} {
    width: 800px;
  }
`

const Grid = styled.div`
  margin-top: ${({ theme }) => theme.spacing(5)};
  display: grid;
  row-gap: ${({ theme }) => theme.spacing(5)};

  ${({ theme }) => theme.breakpoints.up('sm')} {
    grid-template-rows: auto;
    row-gap: unset;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: ${({ theme }) => theme.spacing(5)};
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-top: ${({ theme }) => theme.spacing(7)};
  }
`

const GirdItem = styled.div``

const GridItemTitle = styled.h4`
  margin: 0;
  line-height: 1.5;
`

const GridItemBody = styled.p`
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 0;

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-top: ${({ theme }) => theme.spacing(3)};
  }
`

interface Props {
  title: string
  blocks: {
    title: string
    body: string
  }[]
}

export function KeyPointsSection({ title, blocks }: Props) {
  function renderGridItems() {
    return blocks.map((block, index) => (
      <GirdItem key={index}>
        <GridItemTitle>{block.title}</GridItemTitle>
        <GridItemBody>{block.body}</GridItemBody>
      </GirdItem>
    ))
  }

  return (
    <>
      <MainContainer>
        <SectionContentWrapper>
          <TextWrapper>
            <H2>{title}</H2>
          </TextWrapper>
          <Grid>{renderGridItems()}</Grid>
        </SectionContentWrapper>
      </MainContainer>
    </>
  )
}
