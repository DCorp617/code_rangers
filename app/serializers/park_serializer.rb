class ParkSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :state_id

  belongs_to :state
end
