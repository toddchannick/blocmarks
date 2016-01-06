Rails.application.routes.draw do

  root to: redirect('/bookmarks#index')

  devise_for :users, :controllers => {
    registrations: 'registrations',
    omniauth_callbacks: 'callbacks'
  }

  devise_scope :user do
    authenticated :user do
      root 'bookmarks#index', as: :authenticated_root
      resources :bookmarks
    end

    unauthenticated do
      root 'devise/sessions#new', as: :unauthenticated_root
      resources :bookmarks, only: [:index, :show]
    end
  end

  resources :users

  resources :bookmarks do
    member do
      put "like", to: "bookmarks#upvote"
    end
  end

  resources :topics


  #API Routing
  namespace :api, defaults: { format: :json } do
    resources :bookmarks, except: [:new, :edit]
    resources :topics
  end


end
