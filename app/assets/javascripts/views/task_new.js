TodoApp.Views.TaskNew = Backbone.View.extend({
  tagName: "form",
  id: "task-new",
  template: JST["tasks/new"],

  events: {
    "submit": "submit"
  },

  render: function() {
    var renderedContent = this.template;
    this.$el.html(renderedContent);
    return this;
  },

  submit: function(event) {
    event.preventDefault();
    var data = $("input#add-task").val();
    this.collection.create({ "title": data });
    $("input#add-task").val("");
  }
});