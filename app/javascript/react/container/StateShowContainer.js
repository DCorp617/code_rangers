import React, { Component } from "react"
import ParkShowContainer from './ParkShowContainer'

class StateShowContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        stateObject: {},
        parks: []
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
          this.setState({ stateObject: stateHash.state, parks: stateHash.state.parks })
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

    render(){
      let nat_parks = this.state.parks.map(park => {

        return(
          <ParkShowContainer
            key={park.id}
            parkName={park.name}
            description={park.description}
          />
        )
      })

      return(
        <div>
          <div>
            <h1 className="state-name">{this.state.stateObject.name}</h1>
            {this.state.stateObject.description}
          </div>
          {nat_parks}
        </div>
      )
    }
}

export default StateShowContainer
