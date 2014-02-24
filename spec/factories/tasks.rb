FactoryGirl.define do
  factory :task do
    title "Buy cheese"
  end

  factory :invalid_task, :parent => :task do
    title nil
    completed nil
  end
end