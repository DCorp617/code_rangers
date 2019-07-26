require "devise"

class Api::V1::ReviewsController < ApplicationController
  before_action :authenticate_user!

  def new
  end

  def create
    parkId = params[:park_id]
    @park = Park.find(parkId)

    review = JSON.parse(request.body.read)

    Review.create!(user: current_user, description: review["description"], rating: review["rating"], reviewable: Park.find(parkId))

    render json: Park.find(parkId)
  end

end
