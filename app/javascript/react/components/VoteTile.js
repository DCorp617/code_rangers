import React, { Component } from 'react'

class VoteTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      review: [],
      upVote: false,
      downVote: false
    }
    this.handleUpVote = this.handleUpVote.bind(this)
    this.handleDownVote = this.handleDownVote.bind(this)
  }

  componentDidMount() {
    // fetch(`/api/v1/reviews/${props.id}`)
    fetch(`/api/v1/reviews/1`)
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
    .then(body => {
        this.setState({ review: body })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  handleUpVote() {

    fetch(`/api/v1/reviews/1`, {
      method: 'PATCH',
      body: JSON.stringify(1)
    })
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
    .then(body => {
        this.setState({review: body})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));

    // if(this.state.upVote === false) {
    //   this.setState({upVote: true, downVote: false})
    // }
    // else {
    //   this.setState({upVote: false, downVote: false})
    // }
  }

  handleDownVote() {
    fetch(`/api/v1/reviews/1`, {
      method: 'PATCH',
      body: JSON.stringify(-1)
    })
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
    .then(body => {
      this.setState({review: body})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));

    // if(this.state.downVote === false) {
    //   this.setState({upVote: false, downVote: true})
    // }
    // else {
    //   this.setState({upVote: false, downVote: false})
    // }
  }

  render() {
    let upArrowStyle;
    let downArrowStyle;


    if(this.state.upVote === true) {
      upArrowStyle = {
        color: '#FF0000'
      }
    }

    if(this.state.downVote === true) {
      downArrowStyle = {
        color: '#FF0000'
      }
    }



    return (
    <div>
      <i className="fa fa-arrow-up" style={upArrowStyle} onClick={this.handleUpVote}></i>
      {this.state.review.net_votes}
      <i className="fa fa-arrow-down" style={downArrowStyle} onClick={this.handleDownVote}></i>
    </div>
    )
  }
}


export default VoteTile
