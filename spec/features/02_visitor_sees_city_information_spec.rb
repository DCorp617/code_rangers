require "rails_helper"

feature "visitor sees city information" do
  scenario "sees city name and description" do
    state1 = State.create!(name:"Maine", abbreviation: "ME", description:"Lovely place to be in tune with nature")

    city1 = City.create!(name:"Orono", description:"Home of Univerity of Maine, biggest super computer on a campus", state: state1)
    visit "/cities/#{city1.id}"

    expect(page).to have_content "Orono"
    expect(page).to have_content "Home of Univerity of Maine, biggest super computer on a campus"

  end
end
