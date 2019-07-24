class Api::V1::ParksController < ApplicationController

  def show
    parkID = params[:id]
    render json: Park.find(parkID)
  end

end
