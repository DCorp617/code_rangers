import React, { Component } from 'react'
import { Link } from "react-router-dom"

const ParkTile = props => {
  return(
    <li className="park-name">
      <i className="fa fa-tree"></i>
      <Link to={`/states/${props.stateId}/parks/${props.id}`}>{props.parkName}</Link>
    </li>
  )
}

export default ParkTile
