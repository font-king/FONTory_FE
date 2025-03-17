import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Button } from '@/shared/ui/Button'
import { SectionLayout } from '@/shared/ui/SectionLayout'

export const NavigationCard = ({ label, buttonLabel, to, Icon }) => (
  <SectionLayout>
    <FeatureContent>
      <h6>{label}</h6>

      <StyledLink to={to}>
        <Button size="lg" withArrow>
          {buttonLabel}
        </Button>
      </StyledLink>

      <Icon />
    </FeatureContent>
  </SectionLayout>
)

const FeatureContent = styled.div`
  ${({ theme }) => theme.flexBox('column', undefined, 'center', '7.8rem')};
  position: relative;
  min-height: 34rem;

  & > h6 {
    ${({ theme }) => theme.font(200, theme.colors.blue[600])};
    white-space: pre-line;
  }

  & > svg {
    position: absolute;
    bottom: 0;
  }
`

const StyledLink = styled(Link)`
  align-self: flex-end;
`
