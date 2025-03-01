import styled from 'styled-components'

export const ColumnSectionContainer = styled.div`
  ${({ theme }) => theme.flexBox('column', undefined, undefined, 'lg')}
`

export const GridContainer = styled.div`
  ${({ theme, $columns, $gap }) => theme.gridBox($columns, undefined, undefined, undefined, $gap)};
`
