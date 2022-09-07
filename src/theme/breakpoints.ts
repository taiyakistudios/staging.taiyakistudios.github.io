const values = {
  xs: 400,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
}

function up(key: keyof typeof values) {
  return `@media (min-width: ${values[key]}px)`
}

export const breakpoints = {
  values,
  up,
}
