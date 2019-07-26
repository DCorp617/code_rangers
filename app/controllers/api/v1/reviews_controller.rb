require "devise"

class Api::V1::ReviewsController < ApplicationController
  before_action :authenticate_user!

  def new
  end

  def create
    parkId = params[:park_id]
    @park = Park.find(parkId)
    parsed_review = JSON.parse(request.body.read)
    @review = Review.new()
    @review.user = current_user
    @review.description = parsed_review["description"]
    @review.rating = parsed_review["rating"]
    @review.reviewable = Park.find(parkId)
    binding.pry

    if @review.save
     flash[:notice] = "Review added successfully"
     render json: Park.find(parkId)
    else
     flash.now[:error] = @review.errors.full_messages.join(", ")
     binding.pry
     render json: Park.find(parkId)
    end
  end
end

# def create
#   parkId = params[:park_id]
#   @park = Park.find(parkId)
#
#   review = JSON.parse(request.body.read)
#
#   Review.create!(user: current_user, description: review["description"], rating: review["rating"], reviewable: Park.find(parkId))
#
#   render json: Park.find(parkId)
# end
