import styled from '@emotion/styled'
import React from 'react'

import { css } from '@emotion/react'
import DiscordIcon from '../../images/discord-logo.svg'
import TaiyakiIcon from '../../images/logo.svg'

const visuallyHiddenStyles = css`
  /* 
    Hide content visually while keeping it screen reader-accessible:
    https://www.sarasoueidan.com/blog/accessible-icon-buttons/
    */
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const LogoButton = styled.a<Props>`
  display: block;

  svg {
    width: 128px;

    path {
      fill: ${({ theme, isLight }) =>
        isLight ? theme.colors.common.white : theme.colors.common.black};
    }
  }

  span {
    ${visuallyHiddenStyles}
  }
`

const MenuContainer = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;
`

const MenuItem = styled.li`
  &:not(:first-of-type) {
    margin-left: ${({ theme }) => theme.spacing(2)};
  }
`

const MenuItemButton = styled.a<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border: 2px solid #ddd;
  border-radius: 50%;

  ${({ theme }) => theme.breakpoints.up('xs')} {
    height: 48px;
    width: 48px;
  }

  path {
    fill: ${({ theme, isLight }) =>
      isLight ? theme.colors.common.white : theme.colors.common.black};
  }

  span {
    ${visuallyHiddenStyles}
  }

  &:hover {
    background-color: ${({ isLight }) =>
      isLight ? `rgba(255, 255, 255, 0.5)` : `rgba(0, 0, 0, 0.05)`};
  }
`

interface Props {
  isLight?: boolean
  logoOverride?: React.ReactNode
}

export function NavBar({ isLight, logoOverride }: Props) {
  return (
    <NavContainer>
      {logoOverride ?? (
        <LogoButton href="/" isLight={isLight}>
          <span>Taiyaki Studios logo button</span>
          <TaiyakiIcon />
        </LogoButton>
      )}
      <MenuContainer>
        <MenuItem>
          <MenuItemButton
            href="https://discord.gg/2mfZA69nAj"
            target="_blank"
            rel="noopener noreferrer"
            isLight={isLight}
          >
            <span>Discord button</span>
            <DiscordIcon />
          </MenuItemButton>
        </MenuItem>
        {/* NOTE(adrian): Disable Twitter button for now
        <MenuItem>
          <MenuItemButton
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            isLight={isLight}
          >
            <span>Twitter button</span>
            <TwitterIcon />
          </MenuItemButton>
        </MenuItem> 
        */}
      </MenuContainer>
    </NavContainer>
  )
}
