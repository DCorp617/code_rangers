import React, { Component } from 'react'
import { Link } from "react-router-dom"

class ParkShowContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      parkShow: {}
    }
  }

  render(){
    return(
      <div className="park-name">
        <Link to={`/parks/${this.props.id}`}>{this.props.parkName}</Link>
      </div>
    )
  }
}
export default ParkShowContainer
