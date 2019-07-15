require "rails_helper"

feature "visitor sees a list of states" do
  scenario "sees a list of states" do
    state1 = State.create!(name:"Maine", description:"Lovely place to be in tune with nature")
    state2 = State.create!(name:"Florida", description:"Live where you vacation")

    visit states_path

    expect(page).to have_content "Maine"
    expect(page).to have_content "Florida"

  end
end
