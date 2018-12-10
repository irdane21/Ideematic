Rails.application.routes.draw do
  root to: '/', to: 'fluxes#index'
  resources :fluxes, only: ['index', 'new', 'create']
  get 'articles/:id', to: 'articles#index'
  get 'articles/new', to: 'articles#new'
  get '/articles/read', to: 'articles#read'
  get '/articles/unread', to: 'articles#unread'
  get '/fluxes/actu', to: 'fluxes#actu'
end
