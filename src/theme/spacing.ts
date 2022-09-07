const SPACING_VALUE = 8

export function spacing(
  value1: number | 'auto',
  value2?: number | 'auto',
  value3?: number | 'auto',
  value4?: number | 'auto',
) {
  function multiplyByValue(value: number | 'auto') {
    if (value === 'auto') {
      return value
    } else if (typeof value === 'number') {
      return `${value * SPACING_VALUE}px`
    } else {
      throw new Error(`Invalid value ${value}`)
    }
  }

  if (value1 != null && value2 != null && value3 != null && value4 != null) {
    return [value1, value2, value3, value4].map(multiplyByValue).join(' ')
  } else if (value1 != null && value2 != null) {
    return [value1, value2].map(multiplyByValue).join(' ')
  } else if (value1 != null) {
    return multiplyByValue(value1)
  } else {
    throw new Error('Params must be [l, t, r, b] or [y, x] or [single]')
  }
}
