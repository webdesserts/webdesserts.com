import { createGlobalStyle } from "styled-components";
import * as colors from './colors';
import * as fonts from './fonts';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  :root {
    ${fonts.family.body};
    ${fonts.body};
    color: ${colors.darkAlt};
  }

  html, body {
    margin: 0;
    padding: 0;
    background-color: ${colors.lite};
    height: 100%;
  }

  a[href] {
    color: inherit;
    text-decoration: underline;
  }
`;
