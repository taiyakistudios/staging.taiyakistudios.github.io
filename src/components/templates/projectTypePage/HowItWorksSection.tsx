import styled from '@emotion/styled'
import React from 'react'

import {
  H2,
  SectionContainer,
  SectionContentWrapper,
  SectionTextWrapper,
  Tagline,
} from '../../shared'

const MainContainer = styled(SectionContainer)`
  background-color: #212121;
  color: ${({ theme }) => theme.colors.common.white};
`

const TextWrapper = styled(SectionTextWrapper)`
  margin: 0;

  ${({ theme }) => theme.breakpoints.up('md')} {
    width: 800px;
  }
`

const Grid = styled.div`
  display: grid;
  row-gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(4)};

  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-top: ${({ theme }) => theme.spacing(7)};
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    column-gap: ${({ theme }) => theme.spacing(2)};
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-top: ${({ theme }) => theme.spacing(9)};
  }
`

const GridItem = styled.div`
  padding: ${({ theme }) => theme.spacing(3)};
  background-color: rgba(255, 255, 255, 0.05);

  ${({ theme }) => theme.breakpoints.up('md')} {
    padding: ${({ theme }) => theme.spacing(5)};
  }
`

const GridItemTitle = styled.h4`
  margin: 0;
  line-height: 1.5;
  font-weight: 700;
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
  tagline: string
  items: {
    title: string
    body: string
  }[]
}

export function HowItWorksSection({ title, tagline, items }: Props) {
  function renderGridItems() {
    return items.map((item, index) => (
      <GridItem key={index}>
        <GridItemTitle>{item.title}</GridItemTitle>
        <GridItemBody>{item.body}</GridItemBody>
      </GridItem>
    ))
  }

  return (
    <>
      <MainContainer>
        <SectionContentWrapper>
          <TextWrapper>
            <H2>{title}</H2>
            <Tagline>{tagline}</Tagline>
          </TextWrapper>
          <Grid>{renderGridItems()}</Grid>
        </SectionContentWrapper>
      </MainContainer>
    </>
  )
}
