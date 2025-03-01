import styled from 'styled-components'

import { SearchStoreProvider } from '@/features/search/model/searchProvider.provider'
import { SearchBar } from '@/features/search/ui/SearchBar'
import { SectionLayout } from '@/shared/ui/SectionLayout'

import { MyCustomFontList } from './MyCustomFontList'

export const MyCustomFont = () => {
  return (
    <SearchStoreProvider>
      <SectionLayout>
        <SearchBarContainer>
          <SearchBar />
        </SearchBarContainer>

        <MyCustomFontList />
      </SectionLayout>
    </SearchStoreProvider>
  )
}

export const SearchBarContainer = styled.div`
  ${({ theme }) => `
    ${theme.padding(0, 0, 'md')}
    ${theme.margin(0, 0, '2xl')}
    ${theme.border('divider', 'bottom')}
  `}
`
