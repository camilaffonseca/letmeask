import { createGlobalStyle } from '@xstyled/styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Roboto', system-ui, -apple-system, 'Segoe UI', 'Ubuntu', 'Cantarell',
      'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
    background-color: background;
    color: black;
    font-weight: 400;
    font-size: 14px;
  }
  code,
  kbd,
  samp,
  pre {
    font-family: 'Roboto Mono', ui-monospace, 'Menlo', 'Consolas', 'Ubuntu Monospace',
      'Noto Mono', 'Oxygen Mono', 'Liberation Mono', monospace, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }
`

export default GlobalStyle
