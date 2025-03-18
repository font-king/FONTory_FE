import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { CloudIcon } from './icons/NonPropIcons'
import { Button } from './Button'
import { SectionLayout } from './SectionLayout'

export const ErrorFallback = ({ resetErrorBoundary }) => {
  const navigate = useNavigate()

  const handleClickReload = () => {
    resetErrorBoundary()
  }

  const handleClickBack = () => {
    resetErrorBoundary()
    navigate('/')
  }

  return (
    <StyledSectionLayout>
      <Container>
        <CloudIcon />
        <Label>데이터를 불러오지 못했습니다. 잠시 후에 다시 시도해주세요.</Label>

        <ButtonGroup>
          <Button size="lg" onClick={handleClickReload}>
            새로고침
          </Button>
          <Button withArrow size="lg" onClick={handleClickBack}>
            홈으로 이동
          </Button>
        </ButtonGroup>
      </Container>
    </StyledSectionLayout>
  )
}

const StyledSectionLayout = styled(SectionLayout)`
  ${({ theme }) => theme.gridBox(undefined, undefined, 'center', 'center')}
  height: 80%;
`

const Container = styled.div`
  ${({ theme }) => theme.flexBox('column', 'center', 'center')}
`

const Label = styled.p`
  ${({ theme }) => `
    ${theme.font(400, theme.colors.grey[600])}
    ${theme.margin('xl', 0, 0)}
  `}
`

const ButtonGroup = styled.div`
  ${({ theme }) => theme.gridBox('1fr 1fr', undefined, 'center', undefined, 'lg')}
  margin-top: 6rem;
`
