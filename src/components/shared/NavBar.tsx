import styled from '@emotion/styled'
import React from 'react'

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: ${({ theme }) => theme.spacing(2, 3)};
`

const LogoContainer = styled.div``

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

export function NavBar() {
  return (
    <NavContainer>
      <LogoContainer>Logo</LogoContainer>
      <MenuContainer>
        <MenuItem>Item A</MenuItem>
        <MenuItem>Item B</MenuItem>
      </MenuContainer>
    </NavContainer>
  )
}
