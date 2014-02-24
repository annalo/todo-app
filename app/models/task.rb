class Task < ActiveRecord::Base
  attr_accessible :completed, :title

  validates :title, :presence => true
  validates :completed, :inclusion => { :in => [true, false] }
end
