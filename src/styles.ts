import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#ffffff',
  preto: '#111111',
  cinza: '#333333',
  fundo: '#FFF8F2',
  rose: '#E66767'
}

export const GlobalCSS = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Roboto, sans-serif;
    list-style:none;
  }
  body{
    background-color:${cores.fundo};
    color:${cores.rose};
    padding-top:40px;
  }
  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    align-items:center;
  }
`
