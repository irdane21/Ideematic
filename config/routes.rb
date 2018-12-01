Rails.application.routes.draw do
  root to: '/', to: 'fluxes#index'
  resources :fluxes, only: ['index', 'new', 'create']
  resources :articles, except: ['destroy']
end
