import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "./themes/defaultTheme";


export const GlobalStyle = createGlobalStyle` 

    *{
        box-sizing: border-box;
        padding:0;
        margin:0;
    }

    body{
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
        background-color: ${defaultTheme.colors.white};
    }

`;