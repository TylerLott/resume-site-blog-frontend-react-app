import React from "react"
import {
  OverviewContainer,
  OverviewImage,
  OverviewTitle,
  OverviewSubtitle,
  OverviewDetails,
  OverviewAuthor,
  OverviewDate,
} from "./OverviewElements"

const Overview = () => {
  return (
    <div>
      {/* Needs an overview containter, image, title, author, post date*/}
      <OverviewContainer id="overview">
        <OverviewTitle>React, Flask, and MongoDB Website</OverviewTitle>
        <OverviewSubtitle>catchy hook</OverviewSubtitle>
        <OverviewImage src="/laptop.jpeg"></OverviewImage>
        <OverviewDetails>
          <OverviewAuthor>Author</OverviewAuthor>
          <OverviewDate>25 Aug 1998</OverviewDate>
        </OverviewDetails>
      </OverviewContainer>
    </div>
  )
}

export default Overview
