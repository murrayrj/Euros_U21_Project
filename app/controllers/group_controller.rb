class GroupController < ApplicationController
  def predictor
    @groups = Group.all
    @groupA = Group.all.select{|group| group.name == "Group A"}
    @groupB = Group.all.select{|group| group.name == "Group B"}
    @CZE = Team.all.select{|team| team.code == 'CZE'}.first
    @DEN = Team.all.select{|team| team.code == 'DEN'}.first
    @GER = Team.all.select{|team| team.code == 'GER'}.first
    @SRB = Team.all.select{|team| team.code == 'SRB'}.first
    @ENG = Team.all.select{|team| team.code == 'ENG'}.first
    @ITA = Team.all.select{|team| team.code == 'ITA'}.first
    @POR = Team.all.select{|team| team.code == 'POR'}.first
    @SWE = Team.all.select{|team| team.code == 'SWE'}.first
  end

  def show
    @groups = Group.all
    @group = Group.find(params[:id])
  end

  def home
    @groups = Group.all
  end
end
