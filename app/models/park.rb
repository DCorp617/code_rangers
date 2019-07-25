class Park < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  belongs_to :state

  has_many :reviews, :as => :reviewable
end
