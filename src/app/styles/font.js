const fontSize = {
  100: '3.2rem',
  200: '2.8rem',
  300: '2.4rem',
  400: '2rem',
  500: '1.8rem',
  600: '1.8rem',
  700: '1.6rem',
  800: '1.4rem',
  900: '1.0rem',
}

const lineHeight = {
  100: '3.8rem',
  200: '3.4rem',
  300: '3.0rem',
  400: '2.6rem',
  500: '2.2rem',
  600: '2.6rem',
  700: '2.2rem',
  800: '1.8rem',
  900: '1.4rem',
}

export const font = (size, color = 'inherit') => `
    font-size: ${fontSize[size]};
    line-height: ${lineHeight[size]};
    color: ${color};
`
