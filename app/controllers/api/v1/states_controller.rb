class Api::V1::StatesController < ApplicationController

  def index
    State.all.each do |state|
      state.update_attributes(description: state_info(state.name))
    end
    render json: State.all
  end

  def show
    render json: State.find(params[:id])
  end
end
