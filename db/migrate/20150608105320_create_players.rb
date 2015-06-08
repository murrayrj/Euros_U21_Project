class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.integer :age
      t.string :nationality
      t.string :club
      t.string :league
      t.float :height
      t.string :position
      t.string :foot
      t.text :image

      t.timestamps null: false
    end
  end
end
