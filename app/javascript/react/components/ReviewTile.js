import React from "react"

const ReviewTile = props => {
  let icons = []

  for (let i = 0; i < 5; i++){
    if (i < props.rating){
    icons.push(<i className="fa fa-tree orange"></i>)
    } else {
    icons.push(<i className="fa fa-tree grey"></i>)
    }
  }

  return(
    <div className="review">
      <div>{icons}</div>
      <p>{props.description}</p>
    </div>
  )
}

export default ReviewTile
