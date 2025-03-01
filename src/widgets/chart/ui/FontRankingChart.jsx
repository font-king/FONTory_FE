import styled from 'styled-components'

import { EmptyMessage } from '@/shared/ui/EmptyMessage'

import { BarChart } from './BarChart'
import { ChartLegend } from './ChartLegend'

const dummyRank = [
  { name: '가나다체', bookmark: 33, download: 19 },
  { name: '마바사체', bookmark: 11, download: 23 },
  { name: '아자차체', bookmark: 10, download: 2 },
  { name: '카타파체', bookmark: 3, download: 2 },
  { name: '하하하체', bookmark: 2, download: 2 },
]

export const FontRankingChart = () => {
  const data = dummyRank

  if (!data || !data.length) return <EmptyMessage message="아직 등록된 폰트가 없습니다." />

  return (
    <Container>
      <BarChart chartData={data} />
      <ChartLegend />
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => theme.flexBox('row', 'center', undefined, '4xl')};
`
