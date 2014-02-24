class Task < ActiveRecord::Base
  attr_accessible :completed, :title, :position

  validates :title, :presence => true
  validates :completed, :inclusion => { :in => [true, false] }

  before_create :increment_position

  def increment_position
    self.position = Task.all.count + 1
  end
end
