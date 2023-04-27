import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
html, body {
display: flex;
  flex-direction: column;
  height: 100%;
}
body {
  box-sizing: border-box;
    background-color: white;
font-family: 'Montserrat' sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
ul {
    list-style: none;
}
a {
    text-decoration: none;
}
button {
    border: none;
    outline: none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
.filter-container {
  display: flex;
  align-items: center;
 justify-content: flex-end;
  width: 1200px;
  margin-bottom: 50px;
}
.button {
font-weight: 600;
font-size: 18px;
line-height: 22px;
background-color: #EBD8FF;
}
.following {
background-color: #5CD3A8;
font-weight: 600;
font-size: 18px;
line-height: 22px;
&:hover {
  background-color: #EBD8FF;
}
}
.cardTitle {
  font-weight: 500;
font-size: 20px;
line-height: 24px;
color: #EBD8FF;
}
`;