require 'rails_helper'

feature "visitor sees list of reviews for specific city" do
  scenario "sees a list of reviews" do
    state1 = State.create!(name:"Maine", abbreviation: "ME", description:"Lovely place to be in tune with nature")
    city1 = City.create!(name:"Orono", description:"Home of Univerity of Maine, biggest super computer on a campus", state: state1)
    user1 = User.create!(first_name:"Jake", last_name:"Jacobs", email:"jakejacobs@aol.com", password:"123456")
    user2 = User.create!(first_name:"Ruth", last_name:"Ruths", email:"ruthruths@aol.com", password:"123456")
    review1 = Review.create!(rating: 4, user: user1, reviewable: city1, description: "Not half bad")
    review2 = Review.create!(rating: 5, user: user2, reviewable: city1, description: "Amazing, would live here")

    visit "/cities/#{city1.id}/reviews"

    expect(page).to have_content "Reviews"
    expect(page).to have_content review1.description
    expect(page).to have_content review2.description

  end

end
