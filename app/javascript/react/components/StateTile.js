import React from "react"
import { Link } from "react-router-dom"

const StateTile = props => {
  return(
    <a href={`/states/${props.id}`}>
      <path id={props.abbreviation} d={props.path}>
        <title>{props.name}</title>
      </path>
    </a>
  )
}

export default StateTile
