class AddConnectionArticlesToFlux < ActiveRecord::Migration[5.2]
  def change
    add_reference :articles, :flux, foreign_key: true
  end
end
