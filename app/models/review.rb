class Review < ApplicationRecord
  belongs_to :reviewable, :polymorphic => true
  belongs_to :user

  validates :description, presence: true
  validates :rating, presence: true
  validates :net_votes, presence: true
end
