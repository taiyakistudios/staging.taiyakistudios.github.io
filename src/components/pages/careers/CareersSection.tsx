import styled from '@emotion/styled'
import React from 'react'
import { H3, SectionContainer, SectionContentWrapper } from '../../shared'
import { CareerItem } from './CareerItem'

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

const Title = styled(H3)`
  font-weight: 700;
`

const Grid = styled.div`
  margin-top: ${({ theme }) => theme.spacing(2)};
  display: grid;
  max-width: 600px;
`

interface Props {
  items: {
    slug: string
    title: string
    description: string
  }[]
}

export function CareersSection({ items }: Props) {
  function renderItems() {
    return items.map(({ slug, title, description }, index) => (
      <CareerItem key={index} slug={slug} title={title} description={description} />
    ))
  }

  return (
    <Container>
      <StyledContentWrapper>
        <Title>Open Positions</Title>
        <Grid>{renderItems()}</Grid>
      </StyledContentWrapper>
    </Container>
  )
}
