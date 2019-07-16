class State < ApplicationRecord
  has_many :cities

  validates :name, presence: true
  validates :description, presence: true
end
