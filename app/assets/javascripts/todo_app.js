window.TodoApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log("Initializing!");
    var $rootEl = $("#content");
    var tasks = new TodoApp.Collections.Tasks();
    tasks.fetch({
      success: function() {
        new TodoApp.Routers.Router($rootEl, tasks);
        Backbone.history.start();
      }
    });
  }
};

$(document).ready(function(){
  TodoApp.initialize();
});
