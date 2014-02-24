TodoApp.Views.TasksList = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, "add change destroy", this.render);
  },

  tagName: "ul",
  id: "list-wrapper",

  render: function() {
    var view = this;
    $(this.el).empty();
    this.collection.each(function(task) {
      var item = new TodoApp.Views.TasksListItem({ model: task });
      $(view.el).append(item.render().el);
    });

    return this;
  }
});