import styled from 'styled-components'

import { BarChart } from '@/widgets/chart/ui/BarChart'
import { ChartLegend } from '@/widgets/chart/ui/ChartLegend'

export const FontRankingChart = () => {
  return (
    <Container>
      <BarChart />
      <ChartLegend />
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => theme.flexBox('row', 'center', undefined, '4xl')};
`
