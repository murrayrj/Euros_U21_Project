class Player < ActiveRecord::Base
  has_many :team_players
  has_many :teams, through: :team_players
end
