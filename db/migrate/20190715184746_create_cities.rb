class CreateCities < ActiveRecord::Migration[5.2]
  def change
    create_table :cities do |t|
      t.belongs_to :state, null: false

      t.string :name, null: false
      t.text :description, null: false

      t.timestamps null: false
    end
  end
end
