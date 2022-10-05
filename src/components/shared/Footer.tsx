import styled from '@emotion/styled'
import React from 'react'

import content from '../../content/default.yaml'

export const Container = styled.footer<Props>`
  padding: ${({ theme }) => theme.spacing(8, 0)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ isLight, theme }) =>
    isLight ? theme.colors.common.white : '#121212'};
  color: ${({ isLight, theme }) => theme.colors.common[isLight ? 'black' : 'white']};
`

export const Text = styled.span`
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 0.75rem;
`

export const Link = styled.a`
  opacity: 0.7;
  margin-top: ${({ theme }) => theme.spacing(2)};
  font-weight: 300;
  font-size: 0.75rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.common.black};
`

interface Props {
  isLight?: boolean
}

export function Footer({ isLight = true }: Props) {
  return (
    <Container isLight={isLight}>
      <Text>© Taiyaki Studios</Text>
      <Link href={content.dmca_policy_link} target="_blank" rel="noopener noreferrer">
        DMCA Policy
      </Link>
    </Container>
  )
}
