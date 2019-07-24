class ParkSerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  belongs_to :state
end
