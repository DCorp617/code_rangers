import React, { Component } from 'react'

class VoteTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      upVote: false,
      downVote: false
    }
    this.handleUpVote = this.handleUpVote.bind(this)
    this.handleDownVote = this.handleDownVote.bind(this)
  }

  handleUpVote() {
    if(this.state.upVote === false) {
      this.setState({upVote: true, downVote: false})
    }
    else {
      this.setState({upVote: false, downVote: false})
    }
  }

  handleDownVote() {
    if(this.state.downVote === false) {
      this.setState({upVote: false, downVote: true})
    }
    else {
      this.setState({upVote: false, downVote: false})
    }
  }

  render() {
    let upArrowStyle;
    let downArrowStyle;

    if(this.state.upVote === true) {
      upArrowStyle = {
        color: '#E58552'
      }
    }

    if(this.state.downVote === true) {
      downArrowStyle = {
        color: '#99B3CF'
      }
    }

    return (
    <div>
      <i className="fa fa-arrow-up" style={upArrowStyle} onClick={this.handleUpVote}></i>
      <i className="fa fa-arrow-down" style={downArrowStyle} onClick={this.handleDownVote}></i>
    </div>
    )
  }
}

export default VoteTile
