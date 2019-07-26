import React from "react"
import VoteTile from "./VoteTile"

const ReviewTile = props => {
  let icons = []

  for (let i = 0; i < 5; i++){
    if (i < props.rating){
    icons.push(<i className="fa fa-tree orange" key={i}></i>)
    } else {
    icons.push(<i className="fa fa-tree grey" key={i}></i>)
    }
  }

  return(
    <div className="review-tile">
      <div>{icons}</div>
      <p>{props.description}</p>
      <VoteTile />
    </div>
  )
}

export default ReviewTile
