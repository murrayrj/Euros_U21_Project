class AddToTeam < ActiveRecord::Migration
  def change
    add_column :teams, :played, :integer
    add_column :teams, :wins, :integer
    add_column :teams, :draws, :integer
    add_column :teams, :losses, :integer
    add_column :teams, :points, :integer
  end
end
