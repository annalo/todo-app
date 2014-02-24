TodoApp.Views.TasksList = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, "change save destroy", this.render);
  },

  tagName: "ul",
  className: "list",

  render: function() {
    var view = this;
    this.collection.each(function(task) {
      var item = new TodoApp.Views.TasksListItem({ model: task });
      $(view.el).append(item.render().el);
    });

    return this;
  }
});