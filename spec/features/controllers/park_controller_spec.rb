require "rails_helper"

describe "get all national parks route", :type => :request do
  let!(:state) { FactoryBot.create(:state) }
  let!(:parks) { FactoryBot.create_list(:random_park, 5) }

  before { get '/api/v1/states/1/parks' }

  it 'returns all parks' do
    expect(JSON.parse(response.body).size).to eq(5)
  end

  it 'returns status code 200' do
    expect(response).to have_http_status(:success)
  end
end
