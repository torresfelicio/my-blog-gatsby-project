import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: 	black;
    --second:   #4169E1;
  }
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  * {
    font-family: 'Roboto', sans-serif;
    color: #333;
    box-sizing: border-box;
    text-decoration: none;
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
  }
  body {
    padding-left: 16px;
    padding-right: 16px;
    max-width: 700px;
    margin: auto;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  a {
    color: var(--primary);
  }
  button,
  a {
    transition: opacity .3s;
    &:focus,
    &:hover {
      opacity: .5;
    }
  }
  .postsContainer__post {
    a {
      font-weight: bold;
      text-decoration: none;
    }
    h2 {
      transition: color .7s;
    }
  }
  .postsContainer__post h2:hover {
    color: var(--second);
  }
  .headerContainer {
    display: flex;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;
    margin-bottom: 32px;
    img {
      max-width: 50px;
      border-radius: 100%;
      margin-right: 16px;
    }
    h1 {
      margin: 0;
    }
  }
  li {
    list-style-type: none;
  }
  .page_post {
    margin: 40px 10px;
  }
  .data_post{
    font-style: italic;
    color: #808080;
  }
`;


export default GlobalStyle;