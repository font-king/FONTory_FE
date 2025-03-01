import styled from 'styled-components'

import { EmptyMessage } from '@/shared/ui/EmptyMessage'

const dummyRank = [
  { name: '가나다체', bookmark: 33, download: 19 },
  { name: '마바사체', bookmark: 11, download: 23 },
  { name: '아자차체', bookmark: 10, download: 2 },
  { name: '카타파체', bookmark: 3, download: 2 },
  { name: '하하하체', bookmark: 2, download: 2 },
]

export const BarChart = () => {
  const data = dummyRank
  const maxValue = Math.max(...data.flatMap((item) => [item.bookmark, item.download]))
  const gridValues = Array.from({ length: 4 }, (_, i) => Math.round(maxValue * (1 - i / 4)))

  if (!data || !data.length) return <EmptyMessage message="등록된 폰트가 없습니다." />

  return (
    <ChartContainer>
      <BarsSection>
        <GridLines>
          {gridValues.map((value, index) => (
            <GridLine key={index}>
              <GridValue>{value}</GridValue>
            </GridLine>
          ))}
        </GridLines>
        <BarsContainer>
          {data.map((item) => (
            <BarGroup key={item.name}>
              <StatBar
                value={(item.bookmark / maxValue) * 100}
                $isBookmark
                data-value={`북마크: ${item.bookmark}`}
              />
              <StatBar
                value={(item.download / maxValue) * 100}
                data-value={`다운로드: ${item.download}`}
              />
            </BarGroup>
          ))}
        </BarsContainer>
      </BarsSection>

      <LabelsContainer>
        {data.map((item) => (
          <span key={item.name} className="label">
            {item.name}
          </span>
        ))}
      </LabelsContainer>
    </ChartContainer>
  )
}

const BarsSection = styled.div`
  position: relative;
  flex-grow: 1;
  width: 100%;
`

const GridLines = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
`

const GridLine = styled.div`
  ${({ theme }) => `
    ${theme.margin(0, 0, 0, '5rem')}
    ${theme.border('chart', 'top')}
  `}
  position: relative;
  height: 25%;
`

const GridValue = styled.span`
  ${({ theme }) => theme.font(800, theme.colors.grey[400])};
  position: absolute;
  top: -0.7rem;
  left: -5rem;
`

const BarsContainer = styled.div`
  ${({ theme }) => `
    ${theme.flexBox('row', 'flex-end', 'space-around')}
    ${theme.margin(0, 0, 0, '4xl')}
    ${theme.border('divider', 'bottom')}
  `}
  position: relative;
  height: 100%;
  z-index: 1;
`

const StatBar = styled.div`
  ${({ theme, value, $isBookmark }) => `
    height: ${`${value}%`};
    background-color: ${$isBookmark ? theme.colors.blue[500] : theme.colors.blue[300]};
  `}

  width: 3rem;
  position: relative;
  cursor: pointer;
  transition: height 0.3s ease;

  &:hover::after {
    ${({ theme }) => theme.font(800, theme.colors.grey[700])};
    content: attr(data-value);
    position: absolute;
    top: -2.5rem;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    z-index: 10;
  }
`

const BarGroup = styled.div`
  ${({ theme }) => theme.flexBox('row', 'flex-end', 'center', 'sm')};
  height: 100%;
`

const ChartContainer = styled.div`
  ${({ theme }) => theme.flexBox('column', undefined, undefined, 'sm')};
  flex-grow: 1;
  height: 20rem;
`

const LabelsContainer = styled.div`
  ${({ theme }) => `
    ${theme.flexBox('row', 'center', 'space-around')}
    ${theme.margin(0, 0, 0, '4xl')}
  `}

  .label {
    ${({ theme }) => theme.font(700, theme.colors.grey[600])};
    text-align: center;
  }
`
