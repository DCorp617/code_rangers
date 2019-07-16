import React from "react"
import { Link } from "react-router-dom"

const StateTile = props => {
  return(
    <div className="state">
      <Link to={`/states/${props.id}`}> {props.abbrevation} </Link>
    </div>
  )
}

export default StateTile
