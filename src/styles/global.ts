import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --backgound: #F7F7F7;
    --primary: #64a19d;
    --secondary: #6c757d;
    --gray-dark: #343a40;
    --light: #f8f9fa;
    --black: #000000;
    --success: #28a745;
    --info: #17a2b8;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%; 
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.0625em;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 750;
  }

  a {
    color: inherit;
    text-decoration: none;
    font-weight: 650;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`