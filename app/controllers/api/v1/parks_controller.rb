class Api::V1::ParksController < ApplicationController

  def show
    parkId = params[:id]
    render json: Park.find(parkId)
  end

end
