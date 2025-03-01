import styled from 'styled-components'

export const ChartLegend = () => (
  <Container>
    <LegendItem>
      <LegendBox $isBookmark />
      <span className="legend-label">북마크 수</span>
    </LegendItem>

    <LegendItem>
      <LegendBox />
      <span className="legend-label">다운로드 수</span>
    </LegendItem>
  </Container>
)

const Container = styled.div`
  ${({ theme }) => theme.flexBox('column', undefined, undefined, 'xl')};
  flex-shrink: 0;
`

const LegendItem = styled.div`
  ${({ theme }) => theme.flexBox('row', 'center', undefined, 'sm')};

  .legend-label {
    ${({ theme }) => theme.font(800, theme.colors.grey[700])};
  }
`

const LegendBox = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: ${({ theme, $isBookmark }) =>
    $isBookmark ? theme.colors.blue[500] : theme.colors.blue[300]};
`
