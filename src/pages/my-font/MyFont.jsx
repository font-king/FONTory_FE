import { ColumnSectionContainer } from '@/app/styles/commonStyle'
import { useFetchMyFontRanking } from '@/entities/font/api/useFont.query'
import { SectionLayout } from '@/shared/ui/SectionLayout'
import { FontRankingChart } from '@/widgets/chart/ui/FontRankingChart'
import { CustomFontList } from '@/widgets/font-list/CustomFontList'

export const MyFont = () => {
  const { data: fonts } = useFetchMyFontRanking()

  return (
    <ColumnSectionContainer>
      <SectionLayout>
        <SectionLayout.TitleContainer>
          <SectionLayout.Title>나만의 폰트 랭킹</SectionLayout.Title>
          <SectionLayout.SubTitle>
            북마크 수와 다운로드 수가 가장 많은 상위 5개 폰트
          </SectionLayout.SubTitle>
        </SectionLayout.TitleContainer>

        <FontRankingChart fonts={fonts} />
      </SectionLayout>

      <SectionLayout>
        <SectionLayout.MoreViewContainer>
          <SectionLayout.Title>내가 제작한 폰트</SectionLayout.Title>
          <SectionLayout.MoreViewButton to="/my-font/custom-font">
            더보기
          </SectionLayout.MoreViewButton>
        </SectionLayout.MoreViewContainer>

        <CustomFontList fonts={fonts} />
      </SectionLayout>
    </ColumnSectionContainer>
  )
}
