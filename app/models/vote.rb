class Vote < ApplicationRecord
  validates :user_id, presence: true
  validates :review_id, presence: true
  validates :vote_value, inclusion: { in: [1,-1] }

  belongs_to :review
  belongs_to :user
end
