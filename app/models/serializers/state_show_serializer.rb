class StateShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  has_many :parks
end
