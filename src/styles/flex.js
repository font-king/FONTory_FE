const gapSize = {
  0: 0,
  xs: '0.8rem',
  sm: '1.2rem',
  md: '1.6rem',
  lg: '2.0rem',
  xl: '2.4rem',
  xxl: '2.8rem',
  xxxl: '3.2rem',
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
