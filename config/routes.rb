Rails.application.routes.draw do
  root 'dashboard#index'
  namespace :api do
    resources :events
  end
end
