class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :Title
      t.text :Description
      t.string :Url
      t.string :Publication
      t.integer :Lu

      t.timestamps
    end
  end
end
