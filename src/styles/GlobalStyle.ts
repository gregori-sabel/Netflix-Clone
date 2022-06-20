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

  :root, body {
    width: 100%;
    height: 100%;
  }


  :root{
    --black: #141414;
    --dark-main: #282828;
  }


  .parent:hover .child{
    opacity: 100%;
  }


  html, body{
    height: 100%;
  }


`;