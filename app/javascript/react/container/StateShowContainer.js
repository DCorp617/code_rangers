import React, { Component } from "react"
import ParkTile from '../components/ParkTile'
import { Link } from "react-router-dom"

var gif;
var height;
var width;
var message;

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
      let nat_parks;

      if(this.state.stateObject.parks && this.state.stateObject.parks.length < 1) {
        gif = "https://media.giphy.com/media/KKOMG9EB7VqBq/giphy.gif"
        height = "700"
        width = "500"
        message = "There are no parks to be found here!"
      }
      else if (this.state.stateObject.parks) {
        nat_parks = this.state.stateObject.parks.map(park => {
          return(
            <ParkTile
            key={park.id}
            id={park.id}
            stateId={park.state_id}
            parkName={park.name}
            />
          )
        })
      }

      return(
        <div>
          <Link to={`/`}>
            <div className="button">Back</div>
          </Link>
          <div className="container">
            <div className="state-show">
              <h1 className="state-name">{this.state.stateObject.name}</h1>
              <p>{this.state.stateObject.description}!</p>
            </div>
            <div className="list-of-parks">
              <h2>National Parks:</h2>
              <img src={gif} height={height} width={width}></img>
              <ul>
                {nat_parks}
              </ul>
            </div>
            <span>{message}</span>
          </div>
        </div>
      )
    }
}

export default StateShowContainer
