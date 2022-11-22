import styled from '@emotion/styled'
import React from 'react'
import { SectionContainer, SectionContentWrapper } from '../../shared'
import { GuideItem } from './GuideItem'

const Container = styled(SectionContainer)`
  min-height: 0;
`

const StyledContentWrapper = styled(SectionContentWrapper)`
  margin-top: 0;

  ${({ theme }) => theme.breakpoints.up('xs')} {
    margin-top: 0;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-top: 0;
  }
`

const Grid = styled.div`
  margin-top: ${({ theme }) => theme.spacing(2)};
  display: grid;
  grid-template-columns: 1fr;
  row-gap: ${({ theme }) => theme.spacing(2)};
  align-items: stretch;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-top: ${({ theme }) => theme.spacing(3)};
    grid-template-columns: 1fr 1fr;
    column-gap: ${({ theme }) => theme.spacing(2)};
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-top: ${({ theme }) => theme.spacing(5)};
    grid-template-columns: 1fr 1fr 1fr;
  }
`

interface Props {
  items: {
    slug: string
    title: string
    description: string
  }[]
}

export function GuidesSection({ items }: Props) {
  function renderItems() {
    return items.map(({ slug, title, description }, index) => (
      <GuideItem key={index} slug={slug} title={title} description={description} />
    ))
  }

  return (
    <Container>
      <StyledContentWrapper>
        <Grid>{renderItems()}</Grid>
      </StyledContentWrapper>
    </Container>
  )
}
