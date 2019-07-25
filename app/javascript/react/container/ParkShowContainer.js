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
    if(this.state.parkObject.id){
      reviews = this.state.parkObject.reviews.map(review => {
        return(
          <ReviewTile
            key={review.id}
            id={review.id}
            rating={review.rating}
            description={review.description}
          />
        )
      })
    }

    return(
      <div>
        <h1 className="park-name">{this.state.parkObject.name}</h1>
        {this.state.parkObject.description}
        <div>
        <div className="reviews">
          {reviews}
        </div>
        <h4>Add Review</h4>
        <ReviewFormContainer addNewReview={this.addNewReview}/>
        <Link to={`/states/${this.state.parkObject.state_id}`}>Back</Link>
        </div>
      </div>
    )
  }

}
export default ParkShowContainer
