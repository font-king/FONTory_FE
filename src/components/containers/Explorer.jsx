import { useState } from 'react'
import styled from 'styled-components'

import { FontCardWithActions } from '../domains/fontCard/FontCardWithActions'
import { ContentLayout } from '../views/ContentLayout'

const dummyFonts = () => {
  return Array.from({ length: 8 }, (_, i) => ({
    id: i,
    name: `가나다체 ${i}`,
    designer: '고로케',
    preview:
      i % 2 === 0
        ? '동해물과 백두산이 마르고 닳도록 하느님이 보우하사'
        : '동해물과 백두산이 마르고 닳도록 하느님이 보우하사닳도록 하느님이 보우하사',
    isBookmarked: i % 2 === 0,
  }))
}

const FILTER_OPTIONS = ['전체', '조회순', '북마크순']

export const Explorer = () => {
  const [activeFilter, setActiveFilter] = useState(FILTER_OPTIONS[0])

  const handleDownload = () => {}
  const handleSave = () => {}
  const handleFilterClick = (filter) => {
    setActiveFilter(filter)
  }

  return (
    <ContentLayout>
      <ExplorerHeader>
        <FilterList>
          {FILTER_OPTIONS.map((filter) => (
            <FilterItem
              key={filter}
              $isActive={filter === activeFilter}
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </FilterItem>
          ))}
        </FilterList>

        <div>검색창</div>
      </ExplorerHeader>

      <FontGrid>
        {dummyFonts().map((font) => (
          <FontCardWithActions
            key={font.id}
            font={font}
            onDownload={handleDownload}
            onSave={handleSave}
          />
        ))}
      </FontGrid>
    </ContentLayout>
  )
}

const ExplorerHeader = styled.div`
  ${({ theme }) => theme.flexBox('row', 'center', 'space-between')};
  ${({ theme }) => theme.padding(0, 0, 'md')};
  ${({ theme }) => theme.margin(0, 0, '2xl')};
  ${({ theme }) => theme.border('divider', 'bottom')};
`

const FilterList = styled.ul`
  ${({ theme }) => theme.flexBox('row', undefined, undefined, 'lg')};
`

const FilterItem = styled.li`
  ${({ theme, $isActive }) =>
    theme.font(500, $isActive ? theme.colors.blue[500] : theme.colors.grey[500])};
  cursor: pointer;
`

const FontGrid = styled.div`
  ${({ theme }) => theme.gridBox('1fr 1fr', undefined, undefined, undefined, 'md')};
`
