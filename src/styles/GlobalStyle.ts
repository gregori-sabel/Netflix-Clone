import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    background-color: var(--black);
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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