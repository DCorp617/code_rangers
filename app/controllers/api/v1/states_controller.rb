require_relative "../../../models/parsewiki.rb"
require_relative "../../../models/serializers/state_show_serializer"

class Api::V1::StatesController < ApplicationController

  def index
    wiki = ParseWiki.new
    State.all.each do |state|
      state.update_attributes(description: wiki.state_info(state.name))
    end
    render json: State.all
  end

  def show
    render json: State.find(params[:id]),
    serializer: StateShowSerializer
  end
end
