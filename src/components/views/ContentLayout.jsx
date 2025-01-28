import styled from 'styled-components'

export const ContentLayout = ({ title, subTitle, children }) => {
  return (
    <Container>
      {title && (
        <Title>
          <h4 className="title">{title}</h4>
          {subTitle && <h5 className="sub-title">{subTitle}</h5>}
        </Title>
      )}
      {children}
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => theme.padding('xl')};
  ${({ theme }) => theme.borderRadius('container')};
  height: fit-content;
  background-color: white;
`

const Title = styled.div`
  ${({ theme }) => theme.margin(0, 0, '4xl')};

  .title {
    ${({ theme }) => theme.font(400)};
  }

  .sub-title {
    ${({ theme }) => theme.margin('md', 0, 0)};
    ${({ theme }) => theme.font(800, theme.colors.grey[500])};
  }
`
