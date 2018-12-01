Rails.application.routes.draw do
  root to: '/', to: 'fluxes#index'
  resources :fluxes, only: ['index', 'new', 'create', 'actu']
  resources :articles, only: ['index', 'new', 'create', 'read']
end
