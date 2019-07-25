class ParkSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :state_id, :image

  belongs_to :state
end
