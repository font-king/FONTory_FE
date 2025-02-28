import styled from 'styled-components'

import { FilterList } from '@/entities/filter/ui/FilterList'
import { FontItemWithButtons } from '@/entities/fontItem/ui/FontItemWithButtons'
import { SearchBar } from '@/entities/search/ui/SearchBar'
import { SectionLayout } from '@/shared/ui/SectionLayout'

const dummyFonts = () => {
  return Array.from({ length: 8 }, (_, i) => ({
    id: i,
    fontName: `가나다체 ${i}`,
    authorName: '고로케',
    preview:
      i % 2 === 0
        ? '동해물과 백두산이 마르고 닳도록 하느님이 보우하사'
        : '동해물과 백두산이 마르고 닳도록 하느님이 보우하사닳도록 하느님이 보우하사',
    isBookmarked: i % 2 === 0,
  }))
}

export const Explorer = () => {
  return (
    <SectionLayout>
      <ExplorerHeader>
        <FilterList />
        <SearchBar />
      </ExplorerHeader>

      <FontGrid>
        {dummyFonts().map((font) => (
          <FontItemWithButtons key={font.id} font={font} basePath="/explorer" />
        ))}
      </FontGrid>
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

const FontGrid = styled.div`
  ${({ theme }) => theme.gridBox('1fr 1fr', undefined, undefined, undefined, 'md')};
`
