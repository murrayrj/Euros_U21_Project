class ChangeNationality < ActiveRecord::Migration
  def change
    rename_column :players, :nationality, :nation
  end
end
