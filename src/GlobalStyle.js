import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Roboto',sans-serif;
        margin: 0;
        padding: 0;
        
    }

    .container{
        max-width: 1440p;
        margin: 0 auto;
    }

    a, link {
        text-decoration: none;
    }
`

export default GlobalStyle