import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
    }

    html{
        font-size: 16px;
        box-sizing: border-box;
    }

    body{
        font-family: 'Work Sans', sans-serif;
        font-weight: 400;
        line-height: 1.6;
    }
`;
