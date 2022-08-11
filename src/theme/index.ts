import { colors } from './colors'
import { spacing } from './spacing'

const customTheme = {
  colors,
  spacing,
}

export default customTheme

export type CustomTheme = typeof customTheme

// Make theme type accessible via props:
// https://emotion.sh/docs/typescript#define-a-theme
declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
