require_relative "../../../models/parsewiki.rb"

class Api::V1::ParksController < ApplicationController

  def show
    parkId = params[:id]
    park = Park.find(parkId)
    wiki = ParseWiki.new
    park.update_attributes(description: wiki.intro(park.name))

    render json: Park.find(parkId)
  end

end
