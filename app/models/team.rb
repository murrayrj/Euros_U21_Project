class Team < ActiveRecord::Base
  has_many :team_players
  has_many :players, through: :team_players
  belongs_to :group

  def update_from_json(json)
    case json["result"]
    when "win" 
      self.points += 3
      self.wins  += 1
    when "draw"
      self.points += 1
      self.draws  += 1
    else 
      self.losses += 1
    end
    self.played += 1
    self.save
  end

  def matches
    Team.all
  end

end
