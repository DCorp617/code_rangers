require_relative "../models/parsewiki"

class StatesController < ApplicationController
  def index
    @states = State.all
    wiki = Parsewiki.new
    binding.pry
    @states.each do |state|
      binding.pry
      state.description << wiki.state_info(state.name)
    end
  end
end
