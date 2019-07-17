class Park < ApplicationRecord
  validates :name, presence: true
  validates :description, presence:true

  has_many :reviews, :as => :reviewable
end
