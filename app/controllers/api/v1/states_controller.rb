class Api::V1::StatesController < ApplicationController

  def index
    render json: State.all
  end

  def show
    render json: State.find(params[:id])
  end
end
