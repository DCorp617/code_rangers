require 'rails_helper'

describe Review do
  it { should have_valid(:rating).when(4) }
  it { should_not have_valid(:rating).when(nil, "") }

  it { should have_valid(:description).when("Pretty big park") }
  it { should_not have_valid(:description).when(nil, "") }

  it { should have_valid(:net_votes).when("0") }
  it { should_not have_valid(:net_votes).when(nil, "") }

  it { should belong_to :user }
  it { should belong_to (:reviewable)}
end
