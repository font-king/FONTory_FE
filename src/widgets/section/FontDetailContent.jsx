import styled from 'styled-components'

export const FontDetailContent = ({ example, bookmarkCount, downloadCount }) => {
  return (
    <Container>
      <StatsContainer>
        <StatGroup>
          <Label>북마크 수</Label>
          <StatValue>{bookmarkCount}회</StatValue>
        </StatGroup>

        <StatGroup>
          <Label>다운로드 수</Label>
          <StatValue>{downloadCount}회</StatValue>
        </StatGroup>
      </StatsContainer>

      <Group>
        <Label>예시 문구</Label>
        <TextArea readOnly value={example} />
      </Group>

      <Group>
        <Label>미리보기</Label>
        <TextArea id="example" placeholder="원하는 내용을 입력해보세요." />
      </Group>
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => theme.flexBox('column', undefined, undefined, '4xl')}
`

const Group = styled.div`
  ${({ theme }) => theme.flexBox('column', undefined, undefined, 'md')}
`

const Label = styled.p`
  ${({ theme }) => theme.font(500, theme.colors.blue[500])}
`

const StatValue = styled.p`
  ${({ theme }) => theme.font(500, theme.colors.grey[700])}
`

const StatsContainer = styled.div`
  ${({ theme }) => theme.gridBox('1fr 1fr')};
`

const StatGroup = styled.div`
  ${({ theme }) => theme.flexBox('row', 'center', undefined, 'lg')}
`

const TextArea = styled.textarea`
  ${({ theme }) => `
    ${theme.padding('xl', '2xl')}
    ${theme.border('input')}
    ${theme.borderRadius('lg')}
    ${theme.font(500, theme.colors.grey[700])}
  `}

  width: 100%;
  height: 11.8rem;
  box-sizing: border-box;
  resize: none;
`
