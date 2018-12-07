Rails.application.routes.draw do
  root to: '/', to: 'fluxes#index'
  resources :fluxes, only: ['index', 'new', 'create'] do
    resources :articles, only: ['index', 'new', 'create']
    get '/articles/read', to: 'articles#read'
    get '/articles/unread', to: 'articles#unread'
  end
  get '/fluxes/actu', to: 'fluxes#actu'
end
