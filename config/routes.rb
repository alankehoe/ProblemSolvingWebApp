CA4002::Application.routes.draw do

  #
  # Api Resources
  #
  namespace :api do
    resources :users
    resources :posts
  end
end
