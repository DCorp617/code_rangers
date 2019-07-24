require "rails_helper"

RSpec.configure do |config|
  config.include Devise::Test::ControllerHelpers, type: :controller
end

RSpec.describe Api::V1::ParksController, type: :controller do

  describe "GET api/v1/states#index" do

    let!(:state) { FactoryBot.create(:state) }
    let!(:parks) { FactoryBot.create_list(:random_park, 5) }

    context "when user goes to state show page" do
      it 'returns all parks on state' do
        before { get '/api/v1/states/1' }
        expect(JSON.parse(response.body).size).to eq(5)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(:success)
      end
    end
  end

  describe "GET #show" do
    context "when user goes to park show page" do
      it "displays one national park" do
        let!(:state) { FactoryBot.create(:state) }
        let!(:parks) { FactoryBot.create_list(:random_park, 5) }
        let!(:park) { FactoryBot.create(:park) }
        before { get '/api/v1/states/1/parks/42' }
      end


      it 'returns all parks on state' do
        expect(JSON.parse(response.body).size).to eq(1)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(:success)
      end
    end
  end
end
