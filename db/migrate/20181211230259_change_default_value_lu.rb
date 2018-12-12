class ChangeDefaultValueLu < ActiveRecord::Migration[5.2]
  def change
    remove_column :articles, :Lu, :integer, :default => 0
    add_column :articles, :Lu, :boolean, :default => false
  end
end
