class Task < ActiveRecord::Base
  attr_accessible :complete, :title

  validates :title, :complete, :presence => true
end
