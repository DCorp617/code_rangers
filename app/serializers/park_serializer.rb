class ParkSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :state_id

  belongs_to :state
  has_many :reviews
end
