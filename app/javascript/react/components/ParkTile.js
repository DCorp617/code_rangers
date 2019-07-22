import React, { Component } from 'react'
import { Link } from "react-router-dom"

const ParkTile = props => {
  return(
    <div className="park-name">
      <Link to={`/states/${props.stateId}/parks/${props.id}`}>{props.parkName}</Link>
    </div>
  )
}

export default ParkTile
