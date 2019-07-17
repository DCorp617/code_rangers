require "rails_helper"

feature "visitor sees list of parks" do
  scenario "sees park names" do
    park1 = Park.create!(name:"Zion National Park", description:"Somewhere in Utah?")
    park1 = Park.create!(name:"Crater Lake National Park", description:"Somewhere in Oregon?")

    visit parks_path

    expect(page).to have_content "Zion National Park"
    expect(page).to have_content "Crater Lake National Park"

  end
end
