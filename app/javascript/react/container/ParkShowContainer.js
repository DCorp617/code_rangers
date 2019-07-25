import React, { Component } from "react"
import { Link } from "react-router-dom"

class ParkShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parkShow: {}
    }
  }

  componentDidMount(){
    let parkUrl = this.props.match.url
    let fetchUrl = "/api/v1" + parkUrl
    fetch(`${fetchUrl}`)
      .then(response => {
        if(response.ok){
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(park => {
        this.setState({ parkShow: park.park })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    return(
      <div>
        <h1 className="park-name">{this.state.parkShow.name}</h1>
        {this.state.parkShow.description}
        <div>
        <Link to={`/states/${this.state.parkShow.state_id}`}>Back</Link>
        </div>
      </div>
    )
  }

}
export default ParkShowContainer
