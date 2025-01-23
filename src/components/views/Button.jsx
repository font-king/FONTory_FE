import styled from 'styled-components'

import { colors } from '@/styles/palette'

import { ArrowRightIcon } from './icons/PropIcons'

const SIZE_STYLES = {
  lg: {
    padding: '2rem 1.8rem',
    rounded: 'xl',
    font: 500,
  },
  md: {
    padding: '1.4rem 1.6rem',
    rounded: 'lg',
    font: 700,
  },
  sm: {
    padding: '1rem 1.4rem',
    rounded: 'md',
    font: 800,
  },
}

export const Button = ({
  size,
  disabled = false,
  type = 'button',
  secondary = false,
  withArrow = false,
  children,
  ...rest
}) => {
  const ButtonComponent = secondary || disabled ? SecondaryButton : PrimaryButton

  return (
    <ButtonComponent type={type} size={size} disabled={disabled} $withArrow={withArrow} {...rest}>
      {children}
      {withArrow && <ArrowRightIcon size={size} />}
    </ButtonComponent>
  )
}

const BasicButton = styled.button`
  ${({ theme, size }) => theme.font(SIZE_STYLES[size].font, 'white')};
  ${({ theme, size }) => theme.borderRadius(SIZE_STYLES[size].rounded)};
  display: ${({ $withArrow }) => ($withArrow ? 'flex' : 'inline-block')};
  gap: ${({ $withArrow }) => $withArrow && '1.2rem'};
  padding: ${({ size }) => SIZE_STYLES[size].padding};
  transition: background-color 0.3s ease;
`

const PrimaryButton = styled(BasicButton)`
  background: ${colors.blue[500]};
  &:hover:not(:disabled) {
    background: ${colors.blue[600]};
  }
`

const SecondaryButton = styled(BasicButton)`
  background: ${colors.grey[500]};
  cursor: not-allowed;
`
