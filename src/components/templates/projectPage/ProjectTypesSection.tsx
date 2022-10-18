import styled from '@emotion/styled'
import React from 'react'

import UnrealEngineLogo from '../../../images/project-type-logos/unreal-engine-logo.svg'
import VrmLogo from '../../../images/project-type-logos/vrm-logo.svg'
import SnapchatLensLogo from '../../../images/project-type-logos/snapchat-lens-logo.svg'
import OtherLogo from '../../../images/project-type-logos/other-logo.svg'

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
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(3)};
  background-color: rgba(255, 255, 255, 0.05);

  ${({ theme }) => theme.breakpoints.up('md')} {
    padding: ${({ theme }) => theme.spacing(5)};
    flex-direction: row;
  }
`

const GridItemIconContainer = styled.div`
  min-width: 80px;
  width: 80px;

  svg {
    width: 100%;
  }
`

const GridItemTextContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(2)};
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-top: 0;
    margin-left: ${({ theme }) => theme.spacing(3)};
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
    margin-top: ${({ theme }) => theme.spacing(2)};
  }
`

function getLogoForProjectType(id: string) {
  // TODO(adrian): Extract string cases to an enum
  switch (id) {
    case 'unreal_engine':
      return <UnrealEngineLogo />
    case 'snapchat_lens':
      return <SnapchatLensLogo />
    case 'vrm':
      return <VrmLogo />
    case 'other':
      return <OtherLogo />
  }
}

interface Props {
  title: string
  tagline: string
  items: {
    id: string
    title: string
    body: string
  }[]
}

export function ProjectTypesSection({ title, tagline, items }: Props) {
  function renderGridItems() {
    console.log(items)

    return items.map((item, index) => (
      <GridItem key={index}>
        <GridItemIconContainer>{getLogoForProjectType(item.id)}</GridItemIconContainer>
        <GridItemTextContainer>
          <GridItemTitle>{item.title}</GridItemTitle>
          <GridItemBody>{item.body}</GridItemBody>
        </GridItemTextContainer>
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
