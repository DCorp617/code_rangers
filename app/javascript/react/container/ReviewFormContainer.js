import React, { Component } from 'react'
import FormBodyField from '../components/FormBodyField'
import FormRatingField from '../components/FormRatingField'


class ReviewFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewDescription: '',
      reviewRating: [],
      errors: {}
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.handleRatingChange = this.handleRatingChange.bind(this)
    this.handleClearForm = thiis.handleClearForm.bind(this)
  }

  handleSubmit() {

  }

  render() {
    return(
      <form onSubmit={this.handleFormSubmit}
        <FormBodyField
          handlerFunction={this.handleBodyChange}
          content={this.state.reviewDescription}
          label="Description"
          name="Description"
        />
        <FormRatingField
          handlerFunction={this.submit.handleRatingChange}
          content={this.state.reviewRating}
          label="Rating"
          name="Rating"
        />
        <div className="button-group">
          <button className="button" onClick={this.handleClearForm}>Clear</button>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

export default ReviewFormContainer
