import styled from 'styled-components'

import { useFontDetail } from '@/entities/font/hook/useFontDetail'
import { useIsMyFont } from '@/entities/font/model/fontDetail.store'
import { FontDeleteButton } from '@/features/delete-font/ui/FontDeleteButton'
import { FontEditButton } from '@/features/edit-font/ui/FontEditButton'
import { SectionLayout } from '@/shared/ui/SectionLayout'
import { RecommendFontList } from '@/widgets/font-list/RecommendFontList'
import { FontDetailHeader } from '@/widgets/header/FontDetailHeader'
import { FontDetailContent } from '@/widgets/section/FontDetailContent'

export const FontDetail = () => {
  const isMyFont = useIsMyFont()

  const { font, recommendList } = useFontDetail()

  const { name, writerName, example, bookmarkCount, downloadCount } = font

  return (
    <SectionLayout>
      <FontDetailHeader fontName={name} authorName={writerName} />
      <FontDetailContent
        bookmarkCount={bookmarkCount}
        downloadCount={downloadCount}
        example={example}
      />

      <BottomContainer>
        {isMyFont ? (
          <ActionButtonGroup>
            <FontEditButton />
            <FontDeleteButton />
          </ActionButtonGroup>
        ) : (
          <div>
            <Label>제작자의 다른 폰트</Label>
            <RecommendFontList recommendList={recommendList} />
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
