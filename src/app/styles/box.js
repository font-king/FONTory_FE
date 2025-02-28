import { colors } from './palette'

const gapSize = {
  0: 0,
  sm: '0.8rem',
  md: '1.2rem',
  lg: '1.6rem',
  xl: '2.0rem',
  '2xl': '2.4rem',
  '3xl': '2.8rem',
  '4xl': '3.2rem',

  'chart-grid': '5rem',
  'modal-y': '5.2rem',
  'modal-x': '4rem',
}

const paddingSize = {
  ...gapSize,
  sidebar: '6rem 2rem',
}

const borderSize = {
  0: 'none',
  divider: `0.1rem solid ${colors.grey[300]}`,
  input: `0.1rem solid ${colors.grey[300]}`,
  chart: `1px dashed ${colors.grey[300]}`,
}

const borderRadiusSize = {
  ...gapSize,
  container: '2rem',
  full: '100%',
}

const boxShadowSize = {
  0: '0',
  md: '0px 6px 15px -2px rgba(16, 24, 40, 0.08)',
  input: `0 0 0 1px ${colors.grey[300]} inset`,
}

export const borderRadius = (...args) => {
  if (args.length === 0) return null

  const getValue = (size) => borderRadiusSize[size] || size
  const values = args.map(getValue)

  return `border-radius: ${values.join(' ')};`
}

export const margin = (...args) => {
  if (args.length === 0) return null

  const getValue = (size) => gapSize[size] ?? size
  const values = args.map(getValue)

  return `margin: ${values.join(' ')};`
}

export const padding = (...args) => {
  if (args.length === 0) return null

  const getValue = (size) => paddingSize[size] ?? size
  const values = args.map(getValue)

  return `padding: ${values.join(' ')};`
}

export const border = (size = 'none', direction) => {
  if (!direction) return `border: ${borderSize[size]};`
  return `border-${direction}: ${borderSize[size]};`
}

export const boxShadow = (size = 0) => {
  if (!size) return `box-shadow: ${borderSize[0]};`
  return `box-shadow: ${boxShadowSize[size]};`
}

export const backgroundColor = (color) => {
  if (!color) return null
  return `background-color: ${color};`
}
