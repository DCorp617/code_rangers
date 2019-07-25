class ParkSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :state_id, :image

  belongs_to :state
  has_many :reviews
end
