class ReviewsSerializer < ActiveModel::Serializer
  attributes :id, :description, :rating, :net_votes

  belongs_to :park
end
