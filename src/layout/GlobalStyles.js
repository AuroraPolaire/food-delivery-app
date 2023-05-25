import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
${normalize}

:root {
  --accent-color: #8baa36;
  --accent-color-gray: #1e1f28;
  --font-color: #22252a;
  
  --transition-dur-and-func: 250ms cubic-bezier(0.4, 0, 0.2, 1)
}

*, *::before, *::after {
  box-sizing: border-box;
}


body {
  font-family: 'Poppins', sans-serif;
 
}

li {
  list-style: none;
}
a {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
  padding: 0;
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}

html {
  scroll-behavior: smooth;
}

div {
  box-sizing: border-box;
}
`;
