TodoApp.Routers.Router = Backbone.Router.extend({
  initialize: function($rootEl, tasks) {
    this.$rootEl = $rootEl;
    this.tasks = tasks
  },

  routes: {
    "": "list"
  },

  list: function() {
    var view = new TodoApp.Views.TasksList({ collection: this.tasks });
    this._swapView(view);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})