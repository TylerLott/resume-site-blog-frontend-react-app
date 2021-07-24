import React from "react"
import {
  ArticleContainer,
  ArticleHeading,
  ArticleRow,
  ArticleCol,
} from "./ArticleBrowserElements"
import Overview from "../Overview"

const ArticleBrowser = () => {
  return (
    <div>
      {/* Needs to hold and organize all of the Overview elements */}
      <ArticleContainer>
        <ArticleHeading>Articles</ArticleHeading>
        <ArticleRow>
          <ArticleCol>
            <Overview></Overview>
          </ArticleCol>
          <ArticleCol>
            <Overview></Overview>
          </ArticleCol>
        </ArticleRow>
        <ArticleRow>
          <ArticleCol>
            <Overview></Overview>
          </ArticleCol>
          <ArticleCol>
            <Overview></Overview>
          </ArticleCol>
        </ArticleRow>
        
      </ArticleContainer>
    </div>
  )
}

export default ArticleBrowser
