import React, { Component } from "react"

class StateShowContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        stateShow: {}
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
        .then(state => {
          this.setState({ stateShow: state })
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

    render(){
      return(
        <div>
          {this.state.stateShow.name}
          {this.state.stateShow.description}
        </div>
      )
    }
}

export default StateShowContainer
