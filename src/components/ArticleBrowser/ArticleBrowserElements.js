import styled from "styled-components"

export const ArticleContainer = styled.div`
  background: #0c0c0c;
  justify-content: center;
  display: inline-block;
  padding: 120px 30px 60px 30px;
  /* height: 200vh; */
  width: 100%;
  z-index: 1;
`

export const ArticleHeading = styled.h1`
  color: white;
  padding-left: 30px;
  padding-bottom: 10px;
  font-weight: 400;
  letter-spacing: 5px;
  @media (min-width: 1060px) {
    width: 1000px;
    margin: 0 auto;
  }
`

export const ArticleRow = styled.div`
  height: 40vh;
  width: 100%;
  margin-top: 5vh;
  @media screen and (min-width: 960px) {
    width: 900px;
    margin: 5vh auto;
  }
  @media screen and (max-width: 800px) {
    height: 100vh;
  }
`
export const ArticleCol = styled.div`
  padding: 0 3%;
  width: 50%;
  height: 100%;
  float: left;
  @media screen and (max-width: 800px) {
    float: none;
    width: 100%;
    height: 50%;
    margin: 20px auto;
  }
`
