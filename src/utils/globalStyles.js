import styled, { createGlobalStyle } from "styled-components";

import { Link } from "gatsby"


export const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    margin: 0;
    padding: 0;
    font-family: 'Kanit', sans-serif;
}
`;


// export const StyleLink = styled(Link)`
// color: rgb(0, 0, 0);
// `



export default GlobalStyle