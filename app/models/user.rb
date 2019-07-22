require_relative './state'

class User < ApplicationRecord
  mount_uploader :profile_photo, ProfilePhotoUploader
  has_many :reviews
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :home_state, inclusion: { in: State::STATES, allow_blank: true}, length: { is: 2, allow_blank: true }
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
