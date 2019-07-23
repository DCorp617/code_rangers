import React from "react"
import VoteTile from './VoteTile'

const ReviewTile = props => {
  return(
    <div className="review">
      <h4>Rating: {props.rating}</h4>
      <p>{props.description}</p>
      <VoteTile
        key={props.id}
        id={props.id}
      />
    </div>
  )
}

export default ReviewTile
