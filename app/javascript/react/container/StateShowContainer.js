import React, { Component } from "react"
import ParkTile from '../components/ParkTile'
import { Link } from "react-router-dom"

class StateShowContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        stateObject: {}
      }
    }

    componentDidMount(){
      let stateId = this.props.match.params.id
      fetch(`/api/v1/states/${stateId}`)
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
        .then(stateHash => {
          this.setState({ stateObject: stateHash.state })
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

    render(){
      let nat_parks = this.state.parks.map(park => {
        return(
          <ParkTile
            key={park.id}
            id={park.id}
            stateId={park.state_id}
            parkName={park.name}
          />
        )
      })

      return(
        <div>
          <div>
            <h1 className="state-name">{this.state.stateObject.name}</h1>
            {this.state.stateObject.description}
          </div>
          <div>
            <Link to={`/`}>Back</Link>
          </div>
          {nat_parks}
        </div>
      )
    }
}

export default StateShowContainer
