import { Global, css, ThemeProvider } from '@emotion/react'
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
            margin: 0;
            padding: 0;
          }
        `}
      />
      {children}
    </ThemeProvider>
  )
}
