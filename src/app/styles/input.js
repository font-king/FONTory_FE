import { css } from 'styled-components'

import theme from './theme'

export const inputStyle = css`
  input,
  textarea {
    font: inherit;
    border: none;
    outline: none;
    background-color: transparent;
    ${theme.font(500, theme.colors.grey[700])}

    &:focus {
      background-color: transparent;
      outline: none;
    }

    &::placeholder {
      ${theme.font(500, theme.colors.grey[500])}
    }
  }
`
