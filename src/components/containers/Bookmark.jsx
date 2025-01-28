import styled from 'styled-components'

import { FontCardWithActions } from '../domains/fontCard/FontCardWithActions'
import { ContentLayout } from '../views/ContentLayout'

const dummyFont = {
  name: '가나다체',
  designer: '고로케',
  previewText: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사',
  isBookmarked: true,
}

export const Bookmark = () => {
  const handleDownload = () => {}
  const handleSave = () => {}

  return (
    <ContentLayout>
      <BookmarkHeader>
        <div>검색창</div>
      </BookmarkHeader>

      <FontGrid>
        {[...Array(8)].map((_, index) => (
          <FontCardWithActions
            key={index}
            font={dummyFont}
            onDownload={handleDownload}
            onSave={handleSave}
          />
        ))}
      </FontGrid>
    </ContentLayout>
  )
}
const BookmarkHeader = styled.div`
  ${({ theme }) => theme.flexBox('row', undefined, 'flex-end')};
  ${({ theme }) => theme.padding(0, 0, 'md')};
  ${({ theme }) => theme.margin(0, 0, '2xl')};
  ${({ theme }) => theme.border('divider', 'bottom')};
`

const FontGrid = styled.div`
  ${({ theme }) => theme.gridBox('1fr 1fr', undefined, undefined, undefined, 'md')};
`
