class CreateFluxes < ActiveRecord::Migration[5.2]
  def change
    create_table :fluxes do |t|
      t.string :Title
      t.string :Url

      t.timestamps
    end
  end
end
