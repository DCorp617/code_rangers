import React, { Component } from "react"
import { Link } from 'react-router-dom'
import StateTile from '../components/StateTile'
require('../../../assets/map_of_usa.svg');

class StatesIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      states: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/states')
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(states => {
      this.setState({ states: states.states })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

render(){

  let us_states = this.state.states.map(state => {
      return(
        <StateTile
        key={state.id}
        id={state.id}
        abbreviation={state.abbreviation}
        path={state.svg}
        />
      )
    })

  return(
    <div>
      <div className="map_of_usa">
        <svg xmlns="http://www.w3.org/2000/svg" width="959" height="593">
        <g className="state">
          {us_states}
        </g>
        <path id="frames" fill="none" stroke="#A9A9A9" strokeWidth="2" d="M215 493v55l36 45M0 425h147l68 68h85l54 54v46"/>
        </svg>
      </div>
    </div>
  )
  }
}

export default StatesIndexContainer;
