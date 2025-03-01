import styled from 'styled-components'

export const EmptyMessage = ({ message }) => {
  return <Container>{message}</Container>
}

const Container = styled.p`
  ${({ theme }) => `
    ${theme.flexBox('row', 'center', 'center')}
    ${theme.font(400, theme.colors.grey[600])}
  `}
  width: 100%;
  height: 12rem;
`
