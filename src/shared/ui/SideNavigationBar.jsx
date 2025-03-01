import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { colors } from '@/app/styles/palette'
import {
  NavBookmarkIcon,
  NavExploreIcon,
  NavFontDesignIcon,
  NavFontSynthesisIcon,
  NavHomeIcon,
  NavMyFontIcon,
} from '@/shared/ui/icons/NavIcons'

const NAV_LIST = [
  { label: '홈', Icon: NavHomeIcon, url: '/' },
  { label: '폰트 제작', Icon: NavFontDesignIcon, url: '/font-design' },
  { label: '폰트 합성', Icon: NavFontSynthesisIcon, url: '/font-synthesis' },
  { label: '둘러보기', Icon: NavExploreIcon, url: '/explore' },
  { label: '북마크', Icon: NavBookmarkIcon, url: '/bookmark' },
  { label: '내 폰트', Icon: NavMyFontIcon, url: '/my-fonts' },
]

export const SideNavigationBar = () => {
  const { pathname } = useLocation()

  return (
    <Container>
      {NAV_LIST.map(({ url, label, Icon }) => {
        const isActive = url === '/' ? pathname === url : pathname.startsWith(url)

        return (
          <NavigationItemContainer key={url} to={url} $isActive={isActive}>
            <Icon isActive={isActive} />
            <ItemLabel $isActive={isActive}>{label}</ItemLabel>
          </NavigationItemContainer>
        )
      })}
    </Container>
  )
}

const Container = styled.nav`
  ${({ theme }) => `
    ${theme.flexBox('column', undefined, 'center', '4xl')}
    ${theme.padding('sidebar')}
    ${theme.borderRadius('container')}
    ${theme.backgroundColor(theme.colors.blue[500])}
    ${theme.boxShadow('md')}
  `}
  height: fit-content;
`

const NavigationItemContainer = styled(Link)`
  ${({ theme, $isActive }) => `
    ${theme.flexBox('row', 'center', undefined, 'xl')}
    ${theme.padding('lg', 'md')}
    ${theme.borderRadius('container')}
    ${theme.backgroundColor($isActive ? '#fff' : colors.blue[500])}
  `}

  & > svg {
    flex-shrink: 0;
  }
`

const ItemLabel = styled.p`
  ${({ theme, $isActive }) => theme.font(500, $isActive ? colors.blue[500] : '#fff')};
`
