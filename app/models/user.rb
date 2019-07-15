require_relative './constants'

class User < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :home_state, inclusion: { in: STATES }
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
