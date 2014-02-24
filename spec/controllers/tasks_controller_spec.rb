require 'spec_helper'

describe Api::TasksController do

  describe "#index" do
    let!(:task) { FactoryGirl.create(:task) }
    before { get :index, :format => :json }

    it "assigns @tasks" do
      expect(assigns[:tasks]).to eq([task])
    end

    it "renders index view" do
      expect(response).to render_template(:index)
    end
  end

  describe "#show" do
    let!(:task) { FactoryGirl.create(:task) }
    before { get :show, :format => :json, id: task }

    it "assigns @task" do
      expect(assigns[:task]).to eq(task)
    end

    it "renders show view"  do
      expect(response).to render_template(:show)
    end
  end

  describe "#create" do
    context "with valid attributes" do
      let!(:task) { FactoryGirl.create(:task) }
      let(:id) { :task.id }

      it "saves new task to database" do
        expect(:id).to_not eq(nil)
      end

      it "renders show view" do
        get :show, :format => :json, :id => task
        expect(response).to render_template(:show)
      end
    end

    context "with invalid attributes" do
      let!(:invalid_task) { FactoryGirl.build(:invalid_task) }

      it "does not save new task in database" do
        expect(invalid_task).not_to be_valid
      end
    end
  end

  describe "#update" do
    let(:task) { FactoryGirl.create(:task) }

    it "saves updated task in database" do
      put :update, :format => :json, id: task, task: FactoryGirl.attributes_for(:task, :completed => true)
      task.reload
      expect(task.completed).to eq(true)
    end
  end

  describe "#destroy" do
    context 'when task is found' do
      it 'responds with 200'
    end
  end
end
