require_relative "../../../models/parsewiki.rb"
require_relative "../../../models/serializers/state_serializer"

class Api::V1::StatesController < ApplicationController
  before_action :authorize_user, except: [:index, :show]

  def index
    render json: State.all
  end

  def show
    state = State.find(params[:id])
    wiki = ParseWiki.new
    state.update_attributes(description: wiki.state_info(state.name))
    render json: State.find(params[:id]), serializer: StateSerializer
  end

  protected
  def authorize_user
    if !user_signed_in || !current_user.admin?
      flash[:notice] = "You do not have access to this page."
      redirect_to root_path
    end
  end
end
