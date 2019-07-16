require_relative './state'

class User < ApplicationRecord
  has_many :reviews
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :home_state, inclusion: { in: State::STATES }, length: { maximum: 2 }
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
