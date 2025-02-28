import styled from 'styled-components'

import { FilterList } from '@/features/filter/ui/FilterList'
import { SearchBar } from '@/features/search/ui/SearchBar'
import { SectionLayout } from '@/shared/ui/SectionLayout'

import { ExplorerFontList } from './ExplorerFontList'

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
