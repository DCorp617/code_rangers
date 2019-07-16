Rails.application.routes.draw do
  root 'states#index'
  devise_for :users

  resources :states, only: [:index, :show]
  resources :cities, only: [:index, :show]
  resources :parks, only: [:index, :show]

end
