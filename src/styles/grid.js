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

export const gridBox = (
  columns = 'auto',
  rows = 'auto',
  alignItems = 'stretch',
  justifyItems = 'stretch',
  gap = 0,
) => `
    display: grid;
    grid-template-columns: ${columns};
    grid-template-rows: ${rows};
    align-items: ${alignItems};
    justify-items: ${justifyItems};
    gap: ${gapSize[gap]};
`
