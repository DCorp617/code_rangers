require_relative "../../../models/parsewiki.rb"

class Api::V1::ParksController < ApplicationController

  def index
    stateID = params[:state_id]
    render json: Park.where(state_id: stateID)
  end

  def show
    wiki = ParseWiki.new
    park = Park.find(params[:id])
    park.update_attributes(description: wiki.intro(park.name))
    render json: Park.find(params[:id])
  end

end

# stateID = params[:id]
# parks = Park.where(state_id: stateID)
#
# wiki = ParseWiki.new
# parks.each do |park|
#   park.update_attributes(description: wiki.intro(park.name))
# end
#
#
# render json: Park.where(state_id: stateID)
