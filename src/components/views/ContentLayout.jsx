import styled from 'styled-components'

export const ContentLayout = ({ title, children }) => {
  return (
    <Container>
      <h4 className="title">{title}</h4>
      {children}
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => theme.padding('xl')};
  ${({ theme }) => theme.borderRadius('container')};
  background-color: white;

  .title {
    ${({ theme }) => theme.margin(0, 0, '4xl')};
    ${({ theme }) => theme.font(400)};
  }
`
