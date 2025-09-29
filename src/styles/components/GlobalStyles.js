import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html, #root {
    height: 100vh;
    margin: 0;
    padding: 0;
    width: 100%;
    background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
