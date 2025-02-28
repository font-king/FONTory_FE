const fontSize = {
  100: '3.6rem',
  200: '3.2rem',
  300: '2.8rem',
  400: '2.4rem',
  500: '2rem',
  600: '1.8rem',
  700: '1.8rem',
  800: '1.6rem',
  900: '1.4rem',
}

const lineHeight = {
  100: '4.2rem',
  200: '3.8rem',
  300: '3.4rem',
  400: '3.0rem',
  500: '2.6rem',
  600: '2.2rem',
  700: '2.6rem',
  800: '2.2rem',
  900: '1.8rem',
}

export const font = (size, color = 'inherit') => `
    font-size: ${fontSize[size]};
    line-height: ${lineHeight[size]};
    color: ${color};
`
