class StateSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :svg
  has_many :parks
end
