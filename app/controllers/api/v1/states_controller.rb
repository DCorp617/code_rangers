require_relative "../../../models/parsewiki.rb"

class Api::V1::StatesController < ApplicationController

  def index
    render json: State.all
  end

  def show
    wiki = ParseWiki.new
    state = State.find(params[:id])
    state.update_attributes(description: wiki.intro(state.name, true))
    render json: State.find(params[:id])
  end
end
