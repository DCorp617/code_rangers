class CreateStates < ActiveRecord::Migration[5.2]
  def change
    create_table :states do |t|
      t.string :name, null: false
      t.string :abbrevation, null: false
      t.text :description, null: false

      t.timestamps null: false
    end
  end
end
