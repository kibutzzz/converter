import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    -webkit-font-smoothing: antialiased;
    font-family: "roboto", sans-serif;
    background-color: #112d4e;
    color: #333;
  }
`;


