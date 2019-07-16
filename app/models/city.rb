class City < ApplicationRecord
  belongs_to :state

  validates :name, presence: true
  validates :description, presence: true

  has_many :reviews, :as => :reviewable
end
