const borderRadiusSize = {
  0: '0',
  sm: '0.8rem',
  md: '1.2rem',
  lg: '1.6rem',
  xl: '2.0rem',
  container: '2rem',
  full: '100%',
}

export const borderRadius = (...args) => {
  if (args.length === 0) return ''

  const getValue = (size) => borderRadiusSize[size] || size
  const values = args.map(getValue)

  return `border-radius: ${values.join(' ')};`
}
