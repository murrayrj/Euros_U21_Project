class RemoveFootFromPlayer < ActiveRecord::Migration
  def change
    remove_column :players, :foot, :string
  end
end
