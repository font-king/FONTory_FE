import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { ColumnSectionContainer } from '@/app/styles/commonStyle'
import { Button } from '@/shared/ui/Button'
import { CirclePencilIcon, ShuffleIcon } from '@/shared/ui/icons/NonPropIcons'
import { SectionLayout } from '@/shared/ui/SectionLayout'
import { PopularFonts } from '@/widgets/home/ui/PopularFonts'

export const Home = () => {
  const navigate = useNavigate()
  const handleNavigate = (path) => () => navigate(path)

  return (
    <ColumnSectionContainer>
      <PopularFonts />

      <FeatureSectionsGrid>
        <SectionLayout>
          <FeatureContent>
            <h6>{`나만의 폰트를\n제작하고 공유하기`}</h6>

            <NavigationButton size="lg" withArrow onClick={handleNavigate('/font-design')}>
              폰트 제작하러 가기
            </NavigationButton>

            <CirclePencilIcon />
          </FeatureContent>
        </SectionLayout>

        <SectionLayout>
          <FeatureContent>
            <h6>{`다른 폰트와 합성하여\n새로운 폰트 만들기`}</h6>

            <NavigationButton size="lg" withArrow onClick={handleNavigate('/font-synthesis')}>
              폰트 합성하러 가기
            </NavigationButton>

            <ShuffleIcon />
          </FeatureContent>
        </SectionLayout>
      </FeatureSectionsGrid>
    </ColumnSectionContainer>
  )
}

const FeatureSectionsGrid = styled.div`
  ${({ theme }) => theme.gridBox('1fr 1fr', undefined, undefined, undefined, 'xl')}
`

const FeatureContent = styled.div`
  ${({ theme }) => theme.flexBox('column', undefined, 'center', '7.8rem')};
  position: relative;
  min-height: 34rem;

  & > h6 {
    ${({ theme }) => theme.font(300, theme.colors.blue[600])};
    white-space: pre-line;
  }

  & > svg {
    position: absolute;
    bottom: 0;
  }
`

const NavigationButton = styled(Button)`
  align-self: flex-end;
`
