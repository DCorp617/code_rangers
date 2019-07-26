import React, { Component } from "react"
import { Link } from "react-router-dom"
import ReviewFormContainer from "./ReviewFormContainer"
import ReviewTile from "../components/ReviewTile"

class ParkShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parkObject: {}
    }
    this.addNewReview = this.addNewReview.bind(this)
  }

  componentDidMount(){
    let parkUrl = this.props.match.url
    let fetchUrl = "/api/v1" + parkUrl

    fetch(`${fetchUrl}`)
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
      .then(parkHash => {
        this.setState({ parkObject: parkHash.park })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  addNewReview(formPayload) {
  let parkID = this.props.match.params.id
  let fetchUrl = `/api/v1/parks/${parkID}/reviews`
  fetch(`${fetchUrl}`, {
    credentials: 'same-origin',
    method: 'POST',
    headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
    body: JSON.stringify(formPayload)
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
         error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(parkHash => {
      this.setState({ parkObject: parkHash.park })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
}

  render(){
    let reviews;
    let reviews_text;

    if (this.state.parkObject.id && this.state.parkObject.reviews.length > 0) {
      reviews_text = "Reviews"
      reviews = this.state.parkObject.reviews.map(review => {
        return(
          <div className="review-tile">
            <ReviewTile
            key={review.reviewable_id}
            id={review.id}
            rating={review.rating}
            description={review.description}
            />
          </div>
        )
      })
    }

    return(
      <div>
      <Link to={`/states/${this.state.parkObject.state_id}`}>
      <div className="button">Back</div>
      </Link>
        <div className="container">
          <h1 className="park">{this.state.parkObject.name}</h1>
          <section className="image">
            <p>{this.state.parkObject.description}.</p>
            <img src={this.state.parkObject.image}></img>
          </section>
          <div className="review-form-container">
            <h3>{reviews_text}</h3>
            <div className="reviews">
            {reviews}
            </div>
            <div className="add-a-review">
              <h2>Add Review</h2>
              <ReviewFormContainer addNewReview={this.addNewReview}/>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
export default ParkShowContainer
