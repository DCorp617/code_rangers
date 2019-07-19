Rails.application.routes.draw do
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :states, only: [:index, :show] do
        resources :parks, only: [:index, :show]
      end
    end
  end
  
  namespace :api do
    namespace :v1 do
      resources :parks, only: [:index, :show]
    end
  end

  get '*page', to: 'static_pages#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  root 'static_pages#index'
end
