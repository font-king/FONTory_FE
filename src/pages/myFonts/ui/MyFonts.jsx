import { ColumnSectionContainer } from '@/app/styles/commonStyle'
import { SectionLayout } from '@/shared/ui/SectionLayout'

import { CustomFontList } from './CustomFontList'
import { FontRankingChart } from './FontRankingChart'

export const MyFonts = () => {
  return (
    <ColumnSectionContainer>
      <SectionLayout>
        <SectionLayout.TitleContainer>
          <SectionLayout.Title>나만의 폰트 랭킹</SectionLayout.Title>
          <SectionLayout.SubTitle>
            북마크 수와 다운로드 수가 가장 많은 상위 5개 폰트
          </SectionLayout.SubTitle>
        </SectionLayout.TitleContainer>

        <FontRankingChart />
      </SectionLayout>

      <SectionLayout>
        <SectionLayout.MoreViewContainer>
          <SectionLayout.Title>내가 제작한 폰트</SectionLayout.Title>
          <SectionLayout.MoreViewButton to="/my-fonts/custom-font">
            더보기
          </SectionLayout.MoreViewButton>
        </SectionLayout.MoreViewContainer>

        <CustomFontList />
      </SectionLayout>
    </ColumnSectionContainer>
  )
}
