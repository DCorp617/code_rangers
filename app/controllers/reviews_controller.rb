class ReviewsController < ApplicationController
  def index
    @reviews = Review.all
    @votes = Vote.all
  end
end
