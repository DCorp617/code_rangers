import React from "react"

const ReviewTile = props => {
  return(
    <div className="review">
      <h7>Rating: {props.rating}</h7>
      <p>{props.description}</p>
    </div>
  )
}

export default ReviewTile
