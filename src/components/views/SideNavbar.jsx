import { memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { font } from '@/styles/font'
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
      <NavItemLabel>{item.label}</NavItemLabel>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.2rem;
  height: fit-content;
  border-radius: 2rem;
  background-color: ${colors.blue[500]};
  padding: 1.6rem;
  box-shadow: 0px 6px 15px -2px rgba(16, 24, 40, 0.08);
`

const NavItemContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 2rem;
  padding: 1.6rem 1.2rem;
  background: ${({ $isActive }) => ($isActive ? '#fff' : colors.blue[500])};
  color: ${({ $isActive }) => ($isActive ? colors.blue[500] : '#fff')};
`

const NavItemLabel = styled.span`
  font-size: ${font.fontSize[500]};
  line-height: ${font.lineHeight[500]};
`
