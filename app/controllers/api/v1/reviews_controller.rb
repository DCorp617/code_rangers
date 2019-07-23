
class Api::V1::ReviewsController < ApplicationController

  def show
    votes = Vote.where(review_id: params[:id])

    sum = 0
    votes.each do |vote|
      sum += vote.vote_value
    end

    review = Review.find(params[:id])
    review.update_attributes(net_votes: sum)

    render json: Review.find(params[:id])
  end

  def update
    vote = Vote.find(review_id = params["id"])
    vote_num = request.body.read.to_i
    vote.update_attributes(vote_value: vote_num)

    votes = Vote.where(review_id: params[:id])

    sum = 0
    votes.each do |vote|
      sum += vote.vote_value
    end

    review = Review.find(params[:id])
    review.update_attributes(net_votes: sum)


    render json: Review.find(params[:id])
  end

end
