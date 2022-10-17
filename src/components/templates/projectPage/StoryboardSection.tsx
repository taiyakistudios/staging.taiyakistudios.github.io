import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

import {
  H2,
  H4,
  H5,
  SectionContainer,
  SectionContentWrapper,
  SectionTextWrapper,
} from '../../shared'

const MainContainer = styled(SectionContainer)`
  background-color: #171717;
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

const GridImageItem = styled.div`
  display: block;
  position: relative;
  background-color: rgba(255, 255, 255, 0.05);
  height: 200px;
  overflow: hidden;
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
  items: (
    | {
        title: string
        body: string
      }
    | { image: IGatsbyImageData }
  )[]
}

export function StoryboardSection({ title, items }: Props) {
  function renderGridItems() {
    return items.map((item, index) => {
      if ('image' in item) {
        return (
          <GridImageItem key={index}>
            <GatsbyImage
              image={item.image}
              alt="Storyboard image"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
              }}
            />
          </GridImageItem>
        )
      } else {
        return (
          <GridItem key={index}>
            {/* <GridItemTitle>{item.title!}</GridItemTitle> */}
            <H5>{item.title!}</H5>
            <GridItemBody>{item.body!}</GridItemBody>
          </GridItem>
        )
      }
    })
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
