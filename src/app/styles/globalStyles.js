import { createGlobalStyle } from 'styled-components'

import { inputStyle } from './input'

const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: Moneygraphy;
    src: url('/src/assets/fonts/Moneygraphy-Rounded.ttf') format('truetype');
    font-style: normal;
    font-display: swap;
	}

	@font-face {
    font-family: Jalnan;
    src: url('/src/assets/fonts/JALNAN2TTF.TTF') format('truetype');
    font-style: normal;
    font-display: swap;
  }


	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		box-sizing: border-box;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	html {
		font-size: 50%;
		font-family: 'Moneygraphy', sans-serif;
		overflow-x: hidden;
	}
	img {
		width: 100%;
		height: 100%;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	button {
		font: inherit;
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
	}
	
	${inputStyle}

  @media (min-width: 1300px) {
    html {
      font-size: 62.5%;
    }
  }

	@media (min-width: 1680px) {
    html {
      font-size: 80%;
    }
  }

	

`

export default GlobalStyles
