json.array!(@tasks) do |task|
  json.(task, :id, :title, :completed, :position, :created_at)
end