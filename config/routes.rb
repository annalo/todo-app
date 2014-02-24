TodoApp::Application.routes.draw do
  namespace :api, :defaults => { :format => :json } do
    resources :tasks
  end

  root :to => "root#root"
end
