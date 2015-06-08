class CreateTeamPlayers < ActiveRecord::Migration
  def change
    create_table :team_players do |t|
      t.integer :team_id
      t.integer :player_id

      t.timestamps null: false
    end
  end
end
