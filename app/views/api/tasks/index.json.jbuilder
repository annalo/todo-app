json.array!(@tasks) do |task|
  json.(task, :id, :title, :completed, :created_at)
end