import React, { Component } from "react"
import { Link } from 'react-router-dom'
import StateTile from '../components/StateTile'

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
      this.setState({ states: states })
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
      />
    )
  })
  return(
    <div>
      {us_states}
    </div>
  )
  }
}

export default StatesIndexContainer;
