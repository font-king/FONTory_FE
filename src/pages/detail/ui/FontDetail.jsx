import styled from 'styled-components'

import { FontDeleteButton } from '@/features/deleteFont/ui/FontDeleteButton'
import { FontEditButton } from '@/features/editFont/ui/FontEditButton'
import { SectionLayout } from '@/shared/ui/SectionLayout'
import { FontDetailContent } from '@/widgets/fontDetail/ui/FontDetailContent'
import { FontDetailHeader } from '@/widgets/fontDetail/ui/FontDetailHeader'

import { RecommendFontList } from './RecommendFontList'

const dummyFont = {
  profile: {
    fontName: '가나다체',
    authorName: '고로케',
  },
  bookmark: 32,
  download: 422,
  preview: '동해물과 백두산이 마르고 닳도록',
  isBookmarked: false,
  recommend: [
    {
      id: 0,
      name: '가나다체',
      designer: '고로케',
      preview: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사',
    },
    {
      id: 1,
      name: '가나다체',
      designer: '고로케',
      preview: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사',
    },
    {
      id: 2,
      name: '가나다체',
      designer: '고로케',
      preview: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사',
    },
  ],
}

export const FontDetail = () => {
  const font = dummyFont
  const isMyFont = false

  return (
    <SectionLayout>
      <FontDetailHeader fontName={font.profile.fontName} authorName={font.profile.authorName} />
      <FontDetailContent font={font} />

      <BottomContainer>
        {isMyFont ? (
          <ActionButtonGroup>
            <FontEditButton />
            <FontDeleteButton />
          </ActionButtonGroup>
        ) : (
          <RecommendFontList recommendList={font.recommend} />
        )}
      </BottomContainer>
    </SectionLayout>
  )
}

const ActionButtonGroup = styled.div`
  ${({ theme }) => theme.flexBox('row', 'center', 'flex-end', 'md')}
`

const BottomContainer = styled.div`
  ${({ theme }) => theme.margin('4xl', 0, 0)}
`
