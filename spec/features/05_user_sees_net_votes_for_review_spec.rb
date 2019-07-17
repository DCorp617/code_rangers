require 'rails_helper'

feature "visitor sees net votes for each review" do
  scenario "sees net votes" do
    state1 = State.create!(name:"Maine", abbreviation: "ME", description:"Lovely place to be in tune with nature")
    city1 = City.create!(name:"Orono", description:"Home of Univerity of Maine, biggest super computer on a campus", state: state1)
    user1 = User.create!(first_name:"Jake", last_name:"Jacobs", email:"jakejacobs@aol.com", password:"123456")
    user2 = User.create!(first_name:"Ruth", last_name:"Ruths", email:"ruthruths@aol.com", password:"123456")
    user3 = User.create!(first_name:"Bob", last_name:"Boblaw", email:"bobboblaw@aol.com", password:"123456")
    review1 = Review.create!(rating: 4, user: user1, reviewable: city1, description: "Not half bad")
    vote1 = Vote.create!(review: review1, user: user1, vote_value: 1)
    vote1 = Vote.create!(review: review1, user: user2, vote_value: 1)
    vote1 = Vote.create!(review: review1, user: user3, vote_value: -1)

    visit "/cities/#{city1.id}/reviews"

    expect(page).to have_content "Net Votes:"
    expect(page).to have_content "1"
  end
end
