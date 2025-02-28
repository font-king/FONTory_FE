import styled from 'styled-components'

import { FilterList } from '@/entities/filter/ui/FilterList'
import { SearchBar } from '@/entities/search/ui/SearchBar'
import { ExplorerFontList } from '@/features/explorer/ui/ExplorerFontList'
import { SectionLayout } from '@/shared/ui/SectionLayout'

export const Explorer = () => {
  return (
    <SectionLayout>
      <ExplorerHeader>
        <FilterList />
        <SearchBar />
      </ExplorerHeader>

      <ExplorerFontList />
    </SectionLayout>
  )
}

const ExplorerHeader = styled.div`
  ${({ theme }) => `
    ${theme.gridBox('1fr 1fr', undefined, 'center')}
    ${theme.padding(0, 0, 'md')}
    ${theme.margin(0, 0, '2xl')}
    ${theme.border('divider', 'bottom')}
  `}
`
