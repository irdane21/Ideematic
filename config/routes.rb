Rails.application.routes.draw do
  root to: '/', to: 'fluxes#index'
  resources :flux, only: ['index', 'create']
  resources :articles, except: ['destroy']
end
