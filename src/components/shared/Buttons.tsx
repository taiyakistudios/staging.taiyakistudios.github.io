import { css, Theme } from '@emotion/react'
import styled from '@emotion/styled'
import { Link as GatsbyLink } from 'gatsby'

const baseStyle = (theme: Theme, isLight?: boolean, isOutline?: boolean) => {
  function getBackgroundColor() {
    if (isOutline) return 'transparent'
    return isLight ? theme.colors.common.white : theme.colors.common.black
  }

  function getHoverBackgroundColor() {
    return isLight ? 'rgba(255, 255, 255, 0.8)' : 'rgba(23, 23, 23, 0.8)'
  }

  function getColor() {
    if (isOutline) {
      return isLight ? theme.colors.common.white : theme.colors.common.black
    } else {
      return isLight ? theme.colors.common.black : theme.colors.common.white
    }
  }

  function getBorder() {
    if (!isOutline) return 'none'
    const color = isLight ? theme.colors.common.white : theme.colors.common.black
    return `1px solid ${color}`
  }

  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    border-radius: ${theme.spacing(1)};
    height: ${theme.spacing(6)};
    padding: ${theme.spacing(0, 3)};
    font-weight: 700;
    text-decoration: none;
    font-size: 0.8rem;
    background-color: ${getBackgroundColor()};
    color: ${getColor()};
    border: ${getBorder()};

    &:hover {
      background-color: ${getHoverBackgroundColor()};
    }

    ${theme.breakpoints.up('xs')} {
      font-size: 1rem;
    }
  `
}

interface Props {
  isLight?: boolean
  isOutline?: boolean
}

export const ContainedButton = styled.a<Props>`
  ${({ theme, isLight, isOutline }) => baseStyle(theme, isLight, isOutline)}
`

/**
 * Styled `GatsbyLink` cannot accept `isLight` and `isOutline` props directly.
 * To avoid an error, these props are lowercased and converted to strings
 * instead of booleans.
 */
interface GatsbyProps {
  islight?: string
  isoutline?: string
}

export const ContainedGatsbyButton = styled(GatsbyLink)<GatsbyProps>`
  ${({ theme, islight, isoutline }) =>
    baseStyle(
      theme,
      islight != null ? islight === 'true' : undefined,
      isoutline != null ? isoutline === 'true' : undefined,
    )}
`
