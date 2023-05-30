import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
${normalize}

:root {
  --accent-color-yellow: #ffb703;
  --accent-color-orange: #fb8500;
  --font-color: #023047;

  --button-color-blue: #219ebc;
  --button-color-skyblue: #8ecae6;
  
  --transition-dur-and-func: 250ms cubic-bezier(0.4, 0, 0.2, 1)
}

*, *::before, *::after {
  box-sizing: border-box;
}


body {
  font-family: 'Poppins', sans-serif;
  color: var(--font-color);
 
}

li {
  list-style: none;
}
a {
  text-decoration: none;
  color: var(--font-color);
  cursor: pointer;
  
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

button {
  cursor: pointer;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none; 
}

input[type='number'],
input[type="number"]:hover,
input[type="number"]:focus {
    appearance: none;
    -moz-appearance: textfield;
}
`;
