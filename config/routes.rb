Rails.application.routes.draw do
  root to: '/', to: 'fluxes#index'
  resources :fluxes, only: ['index', 'new', 'create'] do
    get 'articles', to: 'articles#index'
    post 'articles/new', to: 'articles#new'
    get '/articles/read', to: 'articles#read'
    get '/articles/unread', to: 'articles#unread'
  end
  get '/fluxes/actu', to: 'fluxes#actu'
end
