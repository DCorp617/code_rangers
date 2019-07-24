class Api::V1::ParksController < ApplicationController

  def index
    render json: Park.all
  end

  def show
    stateID = params[:state_id]
    render json: Park.find(state_id = stateID)
  end

end
