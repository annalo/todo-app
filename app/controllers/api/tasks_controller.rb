class Api::TasksController < ApplicationController
  def index
    p "!!!!!!!!!!!!!!!"
    @tasks = Task.all
    p "!!!!!!!!!!!!!!!"
    @tasks.each do |task|
      p task
    end
    render "index"
  end

  def show
    @task = Task.find(params[:id])
    render "show"
  end

  def create
    @task = Task.new(params[:task])
    if @task.save
      render "show"
    else
      render :json => @task.errors.full_messages, :status => 422
    end
  end

  def update
    @task = Task.find(params[:id])
    if @task.update_attributes(params[:task])
      render "show"
    else
      render :json => @task.errors.full_messages
    end
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    render :json => @task
  end
end
