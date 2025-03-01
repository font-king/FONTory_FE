import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.section`
  ${({ theme }) => `
    ${theme.padding('xl')}
    ${theme.borderRadius('container')}
    `}
  position: relative;
  height: fit-content;
  background-color: white;
`

const TitleContainer = styled.div`
  ${({ theme }) => `
    ${theme.flexBox('column', undefined, undefined, 'md')}
    ${theme.margin(0, 0, '4xl')}
  `}
`

const Title = styled.h4`
  ${({ theme }) => theme.font(400)}
`

const SubTitle = styled.h5`
  ${({ theme }) => theme.font(800, theme.colors.grey[500])}
`

const MoreViewButton = styled(Link)`
  ${({ theme }) => `
    ${theme.font(700, theme.colors.grey[600])}
    ${theme.padding(0, 0, 'xs')}
    ${theme.border('moreView', 'bottom')}
  `}
`

const MoreViewContainer = styled.div`
  ${({ theme }) => `
    ${theme.flexBox('row', 'center', 'space-between')}
    ${theme.margin(0, 0, '4xl')}
  `}
`

export const SectionLayout = Object.assign(Container, {
  Title,
  SubTitle,
  TitleContainer,
  MoreViewButton,
  MoreViewContainer,
})
