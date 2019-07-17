require 'rails_helper'

describe Vote do
  it { should have_valid(:vote_value).when(1) }
  it { should_not have_valid(:vote_value).when(18) }
  it { should belong_to :user }
  it { should belong_to :review }
end
