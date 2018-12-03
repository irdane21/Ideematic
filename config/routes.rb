Rails.application.routes.draw do
  root to: '/', to: 'fluxes#index'
  resources :fluxes, only: ['index', 'new', 'create']
  get '/fluxes/actu', to: 'fluxes#actu'
  resources :articles, only: ['index', 'new', 'create']
  get '/articles/marklu', to: 'articles#marklu'
  get '/articles/markpalu', to: 'articles#markpalu'
end
