import styled from 'styled-components'

import { ColumnSectionContainer } from '@/app/styles/commonStyle'
import { CirclePencilIcon, ShuffleIcon } from '@/shared/ui/icons/NonPropIcons'
import { SectionLayout } from '@/shared/ui/SectionLayout'
import { PopularFontList } from '@/widgets/font-list/ui/PopularFontList'
import { NavigationCard } from '@/widgets/navigation-card/ui/NavigationCard'

export const Home = () => (
  <ColumnSectionContainer>
    <SectionLayout>
      <SectionLayout.TitleContainer>
        <SectionLayout.Title>인기 폰트</SectionLayout.Title>
      </SectionLayout.TitleContainer>

      <PopularFontList />
    </SectionLayout>

    <GridContainer>
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

const GridContainer = styled.div`
  ${({ theme }) => theme.gridBox('1fr 1fr', undefined, undefined, undefined, 'xl')}
`
