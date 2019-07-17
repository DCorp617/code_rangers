require 'rails_helper'

describe Park do
  it { should have_valid(:name).when("Yellowstone") }
  it { should_not have_valid(:name).when(nil, "") }

  it { should have_valid(:description).when("Pretty big park") }
  it { should_not have_valid(:description).when(nil, "") }

  it { should have_many :reviews }
end
