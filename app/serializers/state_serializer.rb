class StateSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :abbreviation, :svg

  has_many :parks
end
