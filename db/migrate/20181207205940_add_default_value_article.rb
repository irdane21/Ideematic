class AddDefaultValueArticle < ActiveRecord::Migration[5.2]
  def change
    change_column :articles, :Lu, :integer, :default => 0
  end
end
