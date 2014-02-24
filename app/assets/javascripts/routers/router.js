TodoApp.Routers.Router = Backbone.Router.extend({
  initialize: function($rootEl, tasks) {
    this.$rootEl = $rootEl;
    this.tasks = tasks
  },

  routes: {
    "": "home"
  },

  home: function() {
    // tasks list
    var listView = new TodoApp.Views.TasksList({ collection: this.tasks });
    this.$rootEl.append(listView.render().$el);
    $("ul#list-wrapper").sortable({
      axis: 'y',
      cursor: 'crosshair',
      items: 'li',
      opacity: 0.4,
      update: function(){
      $.ajax({
        url: '/api/tasks/sort',
        type: 'post',
        data: $('ul#list-wrapper').sortable('serialize'),
        dataType: 'script',
        complete: function(request){
          $('ul#list-wrapper').effect('highlight');
        }
      });
    }
    });
    // add tasks input box
    var newView = new TodoApp.Views.TaskNew({ collection: this.tasks });
    this.$rootEl.append(newView.render().$el);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})