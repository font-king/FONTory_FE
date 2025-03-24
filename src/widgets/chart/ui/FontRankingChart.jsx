import styled from 'styled-components'

import { EmptyMessage } from '@/shared/ui/EmptyMessage'

import { BarChart } from './BarChart'
import { ChartLegend } from './ChartLegend'

export const FontRankingChart = ({ fonts }) => {
  if (!fonts || !fonts.length) return <EmptyMessage message="아직 등록된 폰트가 없습니다." />

  return (
    <Container>
      <BarChart chartData={fonts} />
      <ChartLegend />
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => theme.flexBox('row', 'center', undefined, '4xl')};
`
