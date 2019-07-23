import React from "react"

const ReviewTile = props => {
  return(
    <div className="review">
      <h4>Rating: {props.rating}</h4>
      <p>{props.description}</p>
    </div>
  )
}

export default ReviewTile
