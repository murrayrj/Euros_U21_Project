class TeamsController < ApplicationController
  def index
    @teams   = Team.all
    @players = Player.all
  end

  def new
    @gks = Player.where(position: 'GK')
    @rbs = Player.where(position: 'RB')
    @cbs = Player.where(position: 'CB')
    @lbs = Player.where(position: 'LB')
    @cms = Player.where(position: 'CM')
    @wms = Player.where(position: 'WM')
    @sts = Player.where(position: 'ST')
  end

  def show
    @groups = Group.all
    @team = Team.find(params[:id])
  end

  def create
    @team = Team.create(name: "New Team")
    params[:ids].each {|id| @team.players.push(Player.find(id))}
    render json: @team
  end

  def update_teams
    params[:teams].each do |t|
      team = Team.find_by_name(t["name"])
      team.update_from_json(t)
    end
    render json: Team.all
  end

  private
    def team_params
      params.require(:team).permit(:name, :code, :group_id, :played, :wins, :draws, :losses, :points, :teams, :result)
    end
end
