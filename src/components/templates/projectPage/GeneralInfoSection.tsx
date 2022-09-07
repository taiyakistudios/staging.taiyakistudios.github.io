import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
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
  position: relative;
`

const MainTextWrapper = styled(SectionTextWrapper)`
  z-index: 3;
  ${({ theme }) => theme.breakpoints.up('md')} {
    width: 800px;
  }
`

const MainImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.3)
  );
`

const BottomContainer = styled(SectionContainer)`
  background-color: #2b2b2b;
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

const BottomGridItemTitle = styled.h4`
  margin: 0;
  line-height: 1.5;
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
  title: string
  tagline: string
  mosaicBgImage: IGatsbyImageData
  blocks: {
    title: string
    body: string
  }[]
}

export function GeneralInfoSection({ title, tagline, mosaicBgImage, blocks }: Props) {
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
        <GatsbyImage
          image={mosaicBgImage}
          alt="Background image"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}
        />
        <MainImageOverlay />
        <SectionContentWrapper>
          <MainTextWrapper>
            <H2>{title}</H2>
            <Tagline>{tagline}</Tagline>
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
