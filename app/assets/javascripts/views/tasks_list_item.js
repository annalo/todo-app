TodoApp.Views.TasksListItem = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "change destroy", this.render)
  },

  events: {
    "click input.task-item": "check",
    "click a.task-item-delete": "delete"
  },

  tagName: "li",
  className: "list-item",

  id: function() {
    return "task_" + this.model.id;
  },

  template: JST["tasks/list_item"],

  render: function() {
    var renderedContent = this.template({ task: this.model });
    $(this.el).html(renderedContent);
    return this;
  },

  check: function(event) {
    event.preventDefault();
    var checked = event.target.checked;
    if(checked == true) {
      this.model.set({"completed": true})
    } else {
      this.model.set({"completed": false})
    }
    this.model.save();
  },

  delete: function(event) {
    event.preventDefault();
    this.model.destroy();
  }
});