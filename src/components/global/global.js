import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #1C1C1C;
  }
  @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,600;1,300&display=swap');
  * {
    font-family: 'Nunito', sans-serif;
    color: #333;
    box-sizing: border-box;
    list-style-type: none;
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
    transition: opacity .5s;
    &:focus,
    &:hover {
      opacity: .5;
    }
  }
  .postsContainer {
  }
  .postsContainer__post {
    a {
      font-weight: bold;
    }
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
  .contatos{
    list-style-type: none;
    display: flex;
    li {
     margin-left: 10px;
    }
    .links {
        text-decoration:none; 
    }
    }

    .titlePost {
        h2{
            transition: 0.5s;
        }
    }
    .titlePost {
        h2:hover{
            color:	#708090;
        }
    }
    .subinfo {
        font-style: italic;
    }
    .title_post {
      h2{
        margin: 0px
      }
    }
    .time_post {
        margin: 0px;
        padding: 0px;
        font-style: italic;
        color: #333;
    }
    
`;

export default GlobalStyle;