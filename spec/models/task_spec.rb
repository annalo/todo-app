require 'spec_helper'

describe Task do
  context "without title or completion status" do
    let(:incomplete_task) {task = Task.new}

    it "validates presence of title" do
      expect(incomplete_task).to have(1).error_on(:title)
    end

    it "validates presence of completion status" do
      expect(incomplete_task).to have(1).error_on(:complete)
    end
  end
end
