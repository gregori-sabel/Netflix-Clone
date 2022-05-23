import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
      margin: 0;
      background-color: var(--dark-main);
      font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    :root{
      --black: #141414;
      --dark-main: #282828;
    }
`;