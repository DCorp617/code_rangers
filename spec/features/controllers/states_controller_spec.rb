require "rails_helper"

RSpec.configure do |config|
  config.include Devise::Test::ControllerHelpers, type: :controller
end

RSpec.describe Api::V1::StatesController, type: :controller do
  describe "GET #index" do
    describe "view all states at index page", :type => :request do
      let!(:states) { FactoryBot.create_list(:random_state, 5) }
      before { get '/api/v1/states' }

      it 'returns all states' do
        expect(JSON.parse(response.body)["states"].size).to eq(5)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(:success)
      end
    end
  end

  describe "GET #show" do
    describe "view individual state at show page", :type => :request do
      let!(:state) { FactoryBot.create(:state) }
      let!(:parks) { FactoryBot.create_list(:random_park, 5)}
      before { get '/api/v1/states/1' }

      it 'returns individual state' do
        binding.pry
        expect(JSON.parse(response.body).size).to eq(1)
      end

      it 'returns all parks associated with state' do
        expect(JSON.parse(response.body)["state"]["parks"].size).to eq(5)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(:success)
      end
    end
  end
end
