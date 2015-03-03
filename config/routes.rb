CA4002::Application.routes.draw do
  resources :posts

  devise_for :users
  namespace :api do
  resources :users, :defaults => { :format => 'xml' }
  end
end
