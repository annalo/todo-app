TodoApp.Collections.Tasks = Backbone.Collection.extend({
  model: TodoApp.Models.Task,
  url: "/api/tasks",

  comparator: function(task) {
    return task.get("created_at");
  }
});