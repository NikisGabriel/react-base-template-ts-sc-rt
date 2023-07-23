import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset de estilos */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  /* Estilos globais */
     
  //Estilos para scroll
  //*::-webkit-scrollbar {
  //}
  //
  //*::-webkit-scrollbar-track {
  //}
  //
  //*::-webkit-scrollbar-thumb {
  //}  

  html{
    font-size: 62.5%; /* 1rem = 10px, 10px é um tamanho mais conveniente para trabalhar */
    -webkit-font-smoothing: antialiased; /* Melhora a nitidez das fontes no Chrome */
    -moz-osx-font-smoothing: grayscale; /* Melhora a nitidez das fontes no Safari */
  }

  body {
   // font-size: 1.6rem; Voltando ao padrão o tamanho do texto
  }
    
  a{
    color: unset;
    text-decoration: none;
  }
`;

export default GlobalStyle;
