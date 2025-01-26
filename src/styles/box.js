import { colors } from './palette'

const borderRadiusSize = {
  0: '0',
  sm: '0.8rem',
  md: '1.2rem',
  lg: '1.6rem',
  xl: '2.0rem',
  container: '2rem',
  full: '100%',
}

const gapSize = {
  0: 0,
  sm: '0.8rem',
  md: '1.2rem',
  lg: '1.6rem',
  xl: '2.0rem',
  '2xl': '2.4rem',
  '3xl': '2.8rem',
  '4xl': '3.2rem',
}

const borderSize = {
  0: 'none',
  divider: `0.1rem solid ${colors.grey[300]}`,
  input: `0.1rem solid ${colors.grey[300]}`,
}

export const borderRadius = (...args) => {
  if (args.length === 0) return ''

  const getValue = (size) => borderRadiusSize[size] || size
  const values = args.map(getValue)

  return `border-radius: ${values.join(' ')};`
}

export const margin = (...args) => {
  if (args.length === 0) return ''

  const getValue = (size) => gapSize[size] ?? size
  const values = args.map(getValue)

  return `margin: ${values.join(' ')};`
}

export const padding = (...args) => {
  if (args.length === 0) return ''

  const getValue = (size) => gapSize[size] ?? size
  const values = args.map(getValue)

  return `padding: ${values.join(' ')};`
}

export const border = (size = 'none', direction) => {
  if (!direction) return `border: ${borderSize[size]};`
  return `border-${direction}: ${borderSize[size]};`
}
