class TeamController < ApplicationController
  def index
    @groups = Group.all
    @teams = Team.all
  end

  def new
    @gks = Player.all.select {|player| player.position == 'GK'}
    @rbs = Player.all.select {|player| player.position == 'RB'} 
    @cbs = Player.all.select {|player| player.position == 'CB'}
    @lbs = Player.all.select {|player| player.position == 'LB'} 
    @mfs = Player.all.select {|player| player.position == 'MF'} 
    @sts = Player.all.select {|player| player.position == 'ST'} 
  end

  def show
    @groups = Group.all
    @team = Team.find(params[:id])
  end
end
