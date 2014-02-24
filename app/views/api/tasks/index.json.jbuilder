json.array!(@tasks) do |task|
  json.(task, :id, :title, :completed)
end