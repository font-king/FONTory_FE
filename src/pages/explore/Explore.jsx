import styled from 'styled-components'

import { FilterList } from '@/features/filter/ui/FilterList'
import { SearchStoreProvider } from '@/features/search/model/searchProvider.provider'
import { SearchBar } from '@/features/search/ui/SearchBar'
import { SectionLayout } from '@/shared/ui/SectionLayout'
import { ExploreFontList } from '@/widgets/font-list/ui/ExploreFontList'

export const Explore = () => {
  return (
    <SearchStoreProvider>
      <SectionLayout>
        <ExploreHeader>
          <FilterList />
          <SearchBar />
        </ExploreHeader>

        <ExploreFontList />
      </SectionLayout>
    </SearchStoreProvider>
  )
}

const ExploreHeader = styled.div`
  ${({ theme }) => `
    ${theme.gridBox('1fr 1fr', undefined, 'center')}
    ${theme.padding(0, 0, 'md')}
    ${theme.margin(0, 0, '2xl')}
    ${theme.border('divider', 'bottom')}
  `}
`
