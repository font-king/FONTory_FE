import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { PopularFonts } from '../domains/PopularFonts'
import { Button } from '../views/Button'
import { ContentLayout } from '../views/ContentLayout'
import { CirclePencilIcon, ShuffleIcon } from '../views/icons/NonPropIcons'

export const FeatureSection = ({ title, buttonText, onButtonClick, icon }) => (
  <ContentLayout>
    <FeatureContent>
      <p className="feature-title">{title}</p>
      <FeatureButton size="lg" withArrow onClick={onButtonClick}>
        {buttonText}
      </FeatureButton>
      {icon}
    </FeatureContent>
  </ContentLayout>
)

export const Home = () => {
  const navigate = useNavigate()
  const handleNavigate = (path) => () => navigate(path)

  return (
    <Container>
      <PopularFonts />

      <FeatureSectionsGrid>
        <FeatureSection
          title={`나만의 폰트를\n제작하고 공유하기`}
          buttonText="폰트 제작하러 가기"
          onButtonClick={handleNavigate('/font-design')}
          icon={<CirclePencilIcon />}
        />
        <FeatureSection
          title={`다른 폰트와 합성하여\n새로운 폰트 만들기`}
          buttonText="폰트 합성하러 가기"
          onButtonClick={handleNavigate('/font-synthesis')}
          icon={<ShuffleIcon />}
        />
      </FeatureSectionsGrid>
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => theme.flexBox('column', undefined, undefined, 'lg')}
`

const FeatureSectionsGrid = styled.div`
  ${({ theme }) => theme.gridBox('1fr 1fr', undefined, undefined, undefined, 'xl')}
`

const FeatureContent = styled.div`
  ${({ theme }) => theme.flexBox('column', undefined, 'center', '7.8rem')};
  position: relative;
  min-height: 34rem;

  .feature-title {
    ${({ theme }) => theme.font(300, theme.colors.blue[600])};
    white-space: pre-line;
  }

  & > svg {
    position: absolute;
    bottom: 0;
  }
`

const FeatureButton = styled(Button)`
  align-self: flex-end;
`
