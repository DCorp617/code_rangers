require "rails_helper"

RSpec.configure do |config|
  config.include Devise::Test::ControllerHelpers, type: :controller
end

RSpec.describe Api::V1::ParksController, type: :controller do

    describe "GET #show" do

    let!(:state) { FactoryBot.create(:state) }
    let!(:park) { FactoryBot.create(:park) }

    context "when user goes to park show page" do
      before {get :show, params: { id: 42 , state_id: 1} }
      
      it "returns a specific park" do
        get :show, params: { id: 42 , state_id: 1}
        expect(JSON.parse(response.body).size).to eq(1)
      end

      it 'returns status code 200' do
        get :show, params: { id: 42 , state_id: 1}
        expect(response).to have_http_status(:success)
      end
    end
  end
end
