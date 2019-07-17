Rails.application.routes.draw do
  devise_for :users

<<<<<<< HEAD
  namespace :api do
    namespace :v1 do
      resources :states, only: [:index, :show]
    end
  end

  get '*page', to: 'static_pages#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  root 'static_pages#index'
=======
  resources :states, only: [:index, :show]
  resources :cities, only: [:index, :show] do
    resources :reviews, only: [:index]
  end

  resources :parks, only: [:index, :show]

>>>>>>> 27d6f3303ad02f1c4628cbadff8efb710180b53b
end
