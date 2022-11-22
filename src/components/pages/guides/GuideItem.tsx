import styled from '@emotion/styled'
import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

const Link = styled(GatsbyLink)`
  display: flex;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.common.black};
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(3)};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: ${({ theme }) => theme.spacing(1)};
`

const Title = styled.h4`
  margin: 0;
  font-size: 1.25rem;

  &:hover {
    text-decoration: underline;
  }
`

const Description = styled.span`
  margin-top: ${({ theme }) => theme.spacing(1.5)};
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
`

interface Props {
  slug: string
  title: string
  description: string
}

export function GuideItem({ slug, title, description }: Props) {
  return (
    <Link to={`/guides/${slug}`}>
      <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Container>
    </Link>
  )
}
