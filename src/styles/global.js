import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
    //box-shadow: 0 0 0 1px red;
    //background-color: rgba(255, 0, 0, 0.1);
  }
  
  body {
    background-color: #1E192C;
    color: #FFFFFF;
    overflow-x: hidden;
  }

  swiper-container {
      width: 100%;
      height: 100%;
    }

    swiper-slide {
      width: 350px;
      margin-left: 20px;
    }
`;
