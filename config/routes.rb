Rails.application.routes.draw do
  root to: '/'
  resources :flux, only: ['index', 'new', 'create']
  resources :articles, except: ['destroy']
end
