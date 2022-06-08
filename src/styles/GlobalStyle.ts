import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: var(--black);
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }


  :root{
    --black: #141414;
    --dark-main: #282828;
  }


  .parent:hover .child{
    visibility: visible;
  }


  html, body{
    height: 100%;
  }


`;