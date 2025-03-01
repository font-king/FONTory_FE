import styled from 'styled-components'

export const SectionLayout = ({ title, subTitle, children }) => {
  return (
    <Container>
      {title && (
        <TitleContainer>
          <Title>{title}</Title>
          {subTitle && <SubTitle>{subTitle}</SubTitle>}
        </TitleContainer>
      )}
      {children}
    </Container>
  )
}

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
  ${({ theme }) => theme.margin(0, 0, '4xl')};
`
const Title = styled.h4`
  ${({ theme }) => theme.font(400)};
`

const SubTitle = styled.h5`
  ${({ theme }) => `
    ${theme.margin('md', 0, 0)};
    ${theme.font(800, theme.colors.grey[500])}
  `}
`
