require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
    first_name { 'joe' }
    last_name { 'brown' }
    home_state { 'PA'}
  end

  factory :state do
    name { 'Mississippi' }
    abbreviation { 'MS' }
    description { 'Mississippi river, we got rivers' }
    svg { "4-4-4-2-3-1-7-7-74-62-7-2-3-4-3-10"}
    id { 1 }
  end

  factory :random_park, class: Park do
    name { Faker::Lorem.sentence }
    description { Faker::Lorem.sentence }
    state_id { 1 }
  end
end
