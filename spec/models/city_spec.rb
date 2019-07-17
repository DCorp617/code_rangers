require 'spec_helper'
require 'rails_helper'

describe City do
  it { should have_valid(:name).when("Cambridge") }
  it { should_not have_valid(:name).when(nil, "") }

  it { should have_valid(:description).when("Super Smart") }
  it { should_not have_valid(:description).when(nil, "") }

  it { should belong_to :state }
  it { should have_many :reviews }
end
