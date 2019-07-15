require 'spec_helper'
require 'rails_helper'

describe State do
  it { should have_valid(:name).when("California") }
  it { should_not have_valid(:name).when(nil, "") }

  it { should have_valid(:description).when("The sand is soft") }
  it { should_not have_valid(:description).when(nil, "") }
end
