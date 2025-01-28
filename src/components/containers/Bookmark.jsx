import styled from 'styled-components'

import { FontCardWithActions } from '../domains/fontCard/FontCardWithActions'
import { ContentLayout } from '../views/ContentLayout'

const createDummyFont = (id) => ({
  id,
  name: `가나다체 ${id}`,
  designer: '고로케',
  previewText: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사',
  isBookmarked: true,
})
const dummyFonts = Array.from({ length: 8 }, (_, index) => createDummyFont(index))

export const Bookmark = () => {
  const handleDownload = () => {}
  const handleSave = () => {}

  return (
    <ContentLayout>
      <BookmarkHeader>
        <div>검색창</div>
      </BookmarkHeader>

      <FontGrid>
        {dummyFonts.map((font) => (
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
const BookmarkHeader = styled.div`
  ${({ theme }) => theme.flexBox('row', undefined, 'flex-end')};
  ${({ theme }) => theme.padding(0, 0, 'md')};
  ${({ theme }) => theme.margin(0, 0, '2xl')};
  ${({ theme }) => theme.border('divider', 'bottom')};
`

const FontGrid = styled.div`
  ${({ theme }) => theme.gridBox('1fr 1fr', undefined, undefined, undefined, 'md')};
`
