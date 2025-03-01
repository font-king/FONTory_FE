import styled from 'styled-components'

import { SearchStoreProvider } from '@/features/search/model/searchProvider.provider'
import { SearchBar } from '@/features/search/ui/SearchBar'
import { SectionLayout } from '@/shared/ui/SectionLayout'
import { BookmarkFontList } from '@/widgets/font-list/ui/BookmarkFontList'

export const Bookmark = () => (
  <SearchStoreProvider>
    <SectionLayout>
      <BookmarkHeader>
        <SearchBar />
      </BookmarkHeader>

      <BookmarkFontList />
    </SectionLayout>
  </SearchStoreProvider>
)

const BookmarkHeader = styled.div`
  ${({ theme }) => `
    ${theme.padding(0, 0, 'md')}
    ${theme.margin(0, 0, '2xl')}
    ${theme.border('divider', 'bottom')}
  `}
`
