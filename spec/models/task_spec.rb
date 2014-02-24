require 'spec_helper'

describe Task do
  context "without title or completed status" do
    let(:incomplete_task) { task = FactoryGirl.build(:invalid_task) }

    it "validates presence of title" do
      expect(incomplete_task).to have(1).error_on(:title)
    end

    it "validates presence of completed" do
      expect(incomplete_task).to have(1).error_on(:completed)
    end
  end

  context "when task is created" do
    let(:task) { task = FactoryGirl.build(:task) }

    it "sets the complete field to false" do
      expect(task.completed).to equal(false)
    end
  end
end
