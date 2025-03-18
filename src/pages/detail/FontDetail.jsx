import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { useFetchFontDetail } from '@/entities/font/api/useFont.query'
import { FontDeleteButton } from '@/features/delete-font/ui/FontDeleteButton'
import { FontEditButton } from '@/features/edit-font/ui/FontEditButton'
import { SectionLayout } from '@/shared/ui/SectionLayout'
import { RecommendFontList } from '@/widgets/font-list/RecommendFontList'
import { FontDetailHeader } from '@/widgets/header/FontDetailHeader'
import { FontDetailContent } from '@/widgets/section/FontDetailContent'

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

  const { id } = useParams()

  const { data } = useFetchFontDetail(id)

  console.log(id, data)

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
          <div>
            <Label>제작자의 다른 폰트</Label>
            <RecommendFontList recommendList={font.recommend} />
          </div>
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

const Label = styled.p`
  ${({ theme }) => `
    ${theme.margin(0, 0, 'md')}
    ${theme.font(500, theme.colors.blue[500])}
  `}
`
