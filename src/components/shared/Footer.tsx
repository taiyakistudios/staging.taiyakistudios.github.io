import styled from '@emotion/styled'
import React from 'react'

export const Container = styled.footer<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isLight, theme }) =>
    isLight ? theme.colors.common.white : '#121212'};
  color: ${({ isLight, theme }) => theme.colors.common[isLight ? 'black' : 'white']};
`

export const Text = styled.span`
  padding: ${({ theme }) => theme.spacing(8, 0)};
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 0.75rem;
`

interface Props {
  isLight?: boolean
}

export function Footer({ isLight = true }: Props) {
  return (
    <Container isLight={isLight}>
      <Text>© Taiyaki Studios</Text>
    </Container>
  )
}
