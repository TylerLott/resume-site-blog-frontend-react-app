import styled from "styled-components"

export const OverviewContainer = styled.div`
  background: white;
  border-color: gray;
  border-style: solid;
  border-width: 2px;
  border-radius: 15px;
  padding: 10px 10px;
  height: 40vh;
  /* position: relative; */
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.5s;
  @media screen and (max-width: 800px) {
    height: 50vh;
  }
  :hover {
    border-width: 5px;
    border-color: #ea5d5f;
    background: #e8e8e8;
  }
`

export const OverviewImage = styled.img`
  /* height: auto; */
  max-height: 65%;
  object-fit: cover;
  @media screen and (max-width: 800px) {
    max-height: 75%;
  }
`
export const OverviewTitle = styled.h1`
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: block;
  line-height: 1.2em; /* a */
  max-height: 2em;
  font-size: clamp(1rem, 4vw, 1.25rem);
  font-family: Tahoma, sans-serif;
  font-weight: 800;
  padding-left: 5px;
  max-height: 20%;
  transition: 0.5s;
  :hover {
    color: #303030;
  }
`

export const OverviewSubtitle = styled.h2`
  font-size: clamp(0.5rem, 3vw, 1rem);
  font-weight: 400;
  padding-left: 5%;
  max-height: 10%;
  color: gray;
`

export const OverviewDetails = styled.div`
  max-height: 5%;
`

export const OverviewAuthor = styled.h2`
  font-size: clamp(0.5rem, 3vw, 1rem);
  float: left;
  padding-left: 8px;
`
export const OverviewDate = styled.h3`
  font-size: clamp(0.5rem, 2vw, 0.75rem);
  font-weight: 400;
  float: right;
  padding-right: 8px;
`
