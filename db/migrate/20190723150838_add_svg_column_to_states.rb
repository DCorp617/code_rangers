class AddSvgColumnToStates < ActiveRecord::Migration[5.2]
  def change
    add_column :states, :svg, :text, null: false
  end
end
