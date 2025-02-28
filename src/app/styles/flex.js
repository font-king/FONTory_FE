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

export const flexBox = (
  direction = 'row',
  alignItems = 'stretch',
  justifyContent = 'flex-start',
  gap = 0,
) => {
  const gapValue = Object.prototype.hasOwnProperty.call(gapSize, gap) ? gapSize[gap] : gap

  return `
    display: flex;
    flex-direction: ${direction};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    gap: ${gapValue};
  `
}
