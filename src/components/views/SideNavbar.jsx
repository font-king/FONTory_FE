import { memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { colors } from '@/styles/palette'

import {
  NavBookmarkIcon,
  NavExplorerIcon,
  NavFontDesignIcon,
  NavFontSynthesisIcon,
  NavHomeIcon,
  NavMyFontIcon,
} from './icons/NavIcons'

const NAV_LIST = [
  { label: '홈', Icon: NavHomeIcon, url: '/' },
  { label: '폰트 제작', Icon: NavFontDesignIcon, url: '/font-design' },
  { label: '폰트 합성', Icon: NavFontSynthesisIcon, url: '/font-synthesis' },
  { label: '둘러보기', Icon: NavExplorerIcon, url: '/explorer' },
  { label: '북마크', Icon: NavBookmarkIcon, url: '/bookmark' },
  { label: '내 폰트', Icon: NavMyFontIcon, url: '/my-fonts' },
]

const NavItem = memo(({ item, isActive }) => {
  return (
    <NavItemContainer to={item.url} $isActive={isActive}>
      <div>
        <item.Icon isActive={isActive} />
      </div>
      <p className="nav-item-label">{item.label}</p>
    </NavItemContainer>
  )
})

NavItem.displayName = 'NavItem'

export const SideNavbar = () => {
  const { pathname } = useLocation()

  return (
    <Container>
      {NAV_LIST.map((item) => (
        <NavItem key={item.url} item={item} isActive={item.url === pathname} />
      ))}
    </Container>
  )
}

const Container = styled.nav`
  ${({ theme }) => theme.flexBox('column', undefined, 'center', '4xl')};
  ${({ theme }) => theme.borderRadius('container')};
  ${({ theme }) => theme.padding('lg')};
  height: fit-content;
  background-color: ${colors.blue[500]};
  box-shadow: 0px 6px 15px -2px rgba(16, 24, 40, 0.08);
`

const NavItemContainer = styled(Link)`
  ${({ theme }) => theme.flexBox('row', 'center', undefined, 'xl')};
  ${({ theme }) => theme.borderRadius('container')};
  ${({ theme }) => theme.padding('lg', 'md')};
  background: ${({ $isActive }) => ($isActive ? '#fff' : colors.blue[500])};

  .nav-item-label {
    ${({ theme, $isActive }) => theme.font(500, $isActive ? colors.blue[500] : '#fff')};
  }
`
