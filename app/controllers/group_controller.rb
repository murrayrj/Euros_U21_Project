class GroupController < ApplicationController
  def predictor
    @groups = Group.all
    @groupA = Group.all.select{|group| group.name == "Group A"}
    @groupB = Group.all.select{|group| group.name == "Group B"}
  end

  def show
    @groups = Group.all
    @group = Group.find(params[:id])
  end

  def home
    @groups = Group.all
  end
end
