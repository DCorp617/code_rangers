class UpdateStatesTable < ActiveRecord::Migration[5.2]
  def change
    add_column :states, :abbreviation, :string
  end
end
