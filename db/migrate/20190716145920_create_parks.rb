class CreateParks < ActiveRecord::Migration[5.2]
  def change
    create_table :parks do |t|
      t.belongs_to :state, null: false

      t.string :name, null: false
      t.text :description, null: false
      t.text :image

      t.timestamps null: false
    end
  end
end
