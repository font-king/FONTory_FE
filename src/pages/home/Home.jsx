import { ColumnSectionContainer, GridContainer } from '@/app/styles/commonStyle'
import { CirclePencilIcon, ShuffleIcon } from '@/shared/ui/icons/NonPropIcons'
import { SectionLayout } from '@/shared/ui/SectionLayout'
import { NavigationCard } from '@/widgets/card/NavigationCard'
import { PopularFontList } from '@/widgets/font-list/PopularFontList'

export const Home = () => (
  <ColumnSectionContainer>
    <SectionLayout>
      <SectionLayout.TitleContainer>
        <SectionLayout.Title>인기 폰트</SectionLayout.Title>
      </SectionLayout.TitleContainer>

      <PopularFontList />
    </SectionLayout>

    <GridContainer $columns="1fr 1fr" $gap="xl">
      <NavigationCard
        label={`나만의 폰트를\n제작하고 공유하기`}
        to={'/font-design'}
        buttonLabel={'폰트 제작하러 가기'}
        Icon={CirclePencilIcon}
      />
      <NavigationCard
        label={`다른 폰트와 합성하여\n새로운 폰트 만들기`}
        to={'/font-synthesis'}
        buttonLabel={'폰트 합성하러 가기'}
        Icon={ShuffleIcon}
      />
    </GridContainer>
  </ColumnSectionContainer>
)
