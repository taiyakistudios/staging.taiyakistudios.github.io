import { css, Global, ThemeProvider } from '@emotion/react'
import 'normalize.css'
import React from 'react'

import customTheme from '../../theme'

interface Props {
  children: React.ReactNode
}

export function Layout({ children }: Props) {
  return (
    <ThemeProvider theme={customTheme}>
      <Global
        styles={css`
          body {
            font-family: 'Decimal A', 'Decimal B', Arial, Helvetica, sans-serif;
          }
        `}
      />
      {children}
    </ThemeProvider>
  )
}
