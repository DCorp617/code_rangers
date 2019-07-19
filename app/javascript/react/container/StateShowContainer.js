import React, { Component } from "react"
import ParkShowContainer from './ParkShowContainer'


class StateShowContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        stateShow: {},
        parks: []
      }
      this.getParks = this.getParks.bind(this)
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
        .then(state => {
          this.setState({ stateShow: state })
        })
        .then(this.getParks())
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    }


    getParks() {
      let stateId = this.props.match.params.id

      fetch(`/api/v1/parks/${stateId}`)
      .then(response => {
        if (response.ok){
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(parks => {
        this.setState({ parks: parks })
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
            <h1 className="state-name">{this.state.stateShow.name}</h1>
          </div>
          <div>
            {nat_parks}
          </div>
        </div>
      )
    }
}

export default StateShowContainer
