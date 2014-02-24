TodoApp.Collections.Tasks = Backbone.Collection.extend({
  model: TodoApp.Models.Task,
  url: "/api/tasks"
});