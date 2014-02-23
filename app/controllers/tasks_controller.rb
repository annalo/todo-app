class Api::TasksController < ApplicationController
  def index
    @tasks = Task.all
    render "index"
  end

  def show
    @task = Task.find(params[:id])
  end

  def create
    @task = Task.new(params[:task])
    if @task.save
      render "new"
    else
    end
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    render :json => @task
  end
end
