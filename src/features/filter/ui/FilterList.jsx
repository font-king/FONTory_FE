import styled from 'styled-components'

import { FILTER_OPTIONS } from '@/entities/font/constant/font.constant'

import { useActiveFilter, useFilterActions } from '../model/fontFilter.store'

export const FilterList = () => {
  const activeFilter = useActiveFilter()
  const { setActiveFilter } = useFilterActions()

  return (
    <Container>
      {FILTER_OPTIONS.map((filter) => (
        <FilterItem
          key={filter.key}
          $isActive={filter === activeFilter}
          onClick={() => setActiveFilter(filter)}
        >
          {filter.name}
        </FilterItem>
      ))}
    </Container>
  )
}

const Container = styled.ul`
  ${({ theme }) => theme.flexBox('row', undefined, undefined, 'lg')};
`

const FilterItem = styled.li`
  ${({ theme, $isActive }) =>
    theme.font(500, $isActive ? theme.colors.blue[600] : theme.colors.grey[500])};
  cursor: pointer;
`
