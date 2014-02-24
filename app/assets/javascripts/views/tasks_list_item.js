TodoApp.Views.TasksListItem = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "change destroy", this.render)
  },

  tagName: "li",
  className: "list-item",
  template: JST["tasks/list_item"],

  render: function() {
    var renderedContent = this.template({ task: this.model });
    $(this.el).data("task-id", this.model.id);
    $(this.el).html(renderedContent);
    return this;
  }
});