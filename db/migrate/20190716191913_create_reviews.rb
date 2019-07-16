class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.belongs_to :user, null:false
      t.references :reviewable, polymorphic: true, index: true
      t.text :description, null: false
      t.integer :rating, null: false

      t.timestamps null: false
    end
  end
end
