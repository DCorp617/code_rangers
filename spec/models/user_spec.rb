require 'rails_helper'

RSpec.describe User, type: :model do
  it "creates a User if all required fields on signup page are completed" do
    user = FactoryBot.create(:user)

    expect(user.save).to be true
  end

  it "raise an error if all required fields on signup page are not completed" do
    user = User.create(first_name: 'Scott', email: "scottjohn@aol.com")

    expect(user.save).to be false
  end
end
