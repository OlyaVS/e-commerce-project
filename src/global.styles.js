import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 20px 40px;
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: black;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul {
    list-style: none;
  }

  .visually-hidden:not(:focus):not(:active),
  input[type="checkbox"].visually-hidden,
  input[type="radio"].visually-hidden  {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;
