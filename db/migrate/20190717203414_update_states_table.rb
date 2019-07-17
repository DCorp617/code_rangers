class UpdateStatesTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :states, :abbrevation
    add_column :states, :abbreviation, :string
  end
end
