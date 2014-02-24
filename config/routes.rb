TodoApp::Application.routes.draw do
  namespace :api, :defaults => { :format => :json } do
    resources :tasks
  end

  post '/api/tasks/sort', to: 'api/tasks#sort', :format => :json

  root :to => "root#root"
end
