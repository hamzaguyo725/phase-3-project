Rails.application.routes.draw do
  # tasks routes
   
  post '/login', to: 'users#login'
  post '/signup', to: 'users#create'
  get '/movies', to: 'movies#index'

    
  end
  