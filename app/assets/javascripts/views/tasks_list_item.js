TodoApp.Views.TasksListItem = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "change destroy", this.render)
  },

  events: {
    "click input.task-item": "check"
  },

  tagName: "li",
  className: "list-item",
  template: JST["tasks/list_item"],

  render: function() {
    var renderedContent = this.template({ task: this.model });
    $(this.el).html(renderedContent);
    return this;
  },

  check: function(event) {
    event.preventDefault();
    var checked = $(event.target).val();
    if(checked == "on") {
      this.model.set({"completed": true})
    } else {
      this.model.set({"completed": false})
    }
    this.model.save();
  }
});