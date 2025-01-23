import styled from 'styled-components'

import { font } from '@/styles/font'
import { colors } from '@/styles/palette'

import { ArrowRightIcon } from './icons/PropIcons'

const SIZE_STYLES = {
  lg: {
    padding: '2rem 1.8rem',
    rounded: '2rem',
    fontSize: font.fontSize[500],
    lineHeight: font.lineHeight[500],
  },
  md: {
    padding: '1.4rem 1.6rem',
    rounded: '1.6rem',
    fontSize: font.fontSize[700],
    lineHeight: font.lineHeight[700],
  },
  sm: {
    padding: '1rem 1.4rem',
    rounded: '1.2rem',
    fontSize: font.fontSize[800],
    lineHeight: font.lineHeight[800],
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
  color: white;
  display: ${({ $withArrow }) => ($withArrow ? 'flex' : 'inline-block')};
  gap: ${({ $withArrow }) => $withArrow && '1.2rem'};
  border-radius: ${({ size }) => SIZE_STYLES[size].rounded};
  padding: ${({ size }) => SIZE_STYLES[size].padding};
  font-size: ${({ size }) => SIZE_STYLES[size].fontSize};
  line-height: ${({ size }) => SIZE_STYLES[size].lineHeight};
  transition: background-color 0.3s ease;
`

const PrimaryButton = styled(BasicButton)`
  background: ${colors.blue[500]};
  cursor: pointer;
  &:hover:not(:disabled) {
    background: ${colors.blue[600]};
  }
`

const SecondaryButton = styled(BasicButton)`
  background: ${colors.grey[500]};
  cursor: not-allowed;
`
