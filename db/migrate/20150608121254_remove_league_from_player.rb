class RemoveLeagueFromPlayer < ActiveRecord::Migration
  def change
    remove_column :players, :league, :string
  end
end
