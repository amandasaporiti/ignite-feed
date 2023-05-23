import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    -webkit-font-smoothing: antialiased;
    background: var(--gray-900);
    color: var(--gray-300);
  }

  body, button, textarea, input{
    font-weight: 400;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif; 
  }
  button{
    cursor: pointer;
  }

  :root{
    --gray-100: #E1E1E6;
    --gray-300: #C4C4CC;
    --gray-400: #8D8D99;
    --gray-600: #323238;
    --gray-700: #29292e;
    --gray-800: #202024;
    --gray-900: #121214;
    --green-500: #00B37E;
    --green-700: #00875f;
    --white: #FFFFFF;
    --red-danger: #F75A68;
  }
`
