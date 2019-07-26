import React, { Component } from 'react'
import FormBodyField from '../components/FormBodyField'
import FormRatingField from '../components/FormRatingField'

class ReviewFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewDescription: '',
      reviewRating: 3,
      errors: {}
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.handleRatingChange = this.handleRatingChange.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.validateBody = this.validateBody.bind(this)
    this.validateRating = this.validateRating.bind(this)
  }

  handleClearForm(event){
  event.preventDefault();
    this.setState({
      reviewDescription: '',
      reviewRating: []
    })
  }

  handleFormSubmit(event){
    event.preventDefault();
    if(
      this.validateBody(this.state.reviewDescription) &&
      this.validateRating(this.state.reviewRating))
      {
        let formPayload = {
          description: this.state.reviewDescription,
          rating: this.state.reviewRating,
        }
        this.props.addNewReview(formPayload);
        this.handleClearForm(event);
      }
  }

  handleBodyChange(event){
    this.validateBody(event.target.value)
    this.setState({reviewDescription: event.target.value})
  }

  handleRatingChange(event){
    this.validateRating(event.target.value)
    this.setState({reviewRating: event.target.value})
  }

  validateBody(input) {
    if (input.trim() === '') {
      let newError = { reviewBodyInput: 'You must input a review body.' }
      this.setState({ errors: Object.assign({}, this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.reviewBodyInput
      this.setState({ errors: errorState })
      return true
    }
  }

  validateRating(input) {
    if (input === '') {
      let newError = { reviewRatingInput: 'You must input a rating' }
      this.setState({ errors: Object.assign({}, this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.reviewRatingInput
      this.setState({ errors: errorState })
      return true
    }
  }

  render() {
    let errorDiv;
    let errorItems;

    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems[0]}</div>
      errorDiv = errorDiv.props.children.key
    }


    return(
      <form onSubmit={this.handleFormSubmit}>
        {errorDiv}
        <FormBodyField
          handlerFunction={this.handleBodyChange}
          content={this.state.reviewDescription}
          label="Description"
          name="Description"
        />
        <FormRatingField
          handlerFunction={this.handleRatingChange}
          content={this.state.reviewRating}
          label="Rating"
          name="Rating"
        />
        <div className="button-group">
          <button className="form-button" onClick={this.handleClearForm}>Clear</button>
          <input className="form-button submit" type="submit" value="Submit" />
        </div>
      </form>
    )
  }

}

export default ReviewFormContainer
