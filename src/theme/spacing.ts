const SPACING_VALUE = 8

export function spacing(
  value1: number,
  value2?: number,
  value3?: number,
  value4?: number,
) {
  function multiplyByValue(value: number) {
    return `${value * SPACING_VALUE}px`
  }

  if (value1 && value2 && value3 && value4) {
    return [value1, value2, value3, value4].map(multiplyByValue).join(' ')
  } else if (value1 && value2) {
    return [value1, value2].map(multiplyByValue).join(' ')
  } else if (value1) {
    return multiplyByValue(value1)
  } else {
    throw new Error('Params must be [l, t, r, b] or [y, x] or [single]')
  }
}
