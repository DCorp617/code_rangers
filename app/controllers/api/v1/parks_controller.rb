class Api::V1::ParksController < ApplicationController

  def index
    render json: Park.all
  end

  def show
    stateID = params[:id]
    render json: Park.where(state_id: stateID)
  end

end
