Rails.application.routes.draw do

  devise_for :users, :controllers => {
    registrations: 'registrations'
  }

  devise_scope :user do
    authenticated :user do
      root 'bookmarks#index', as: :authenticated_root
      resources :bookmarks, only: [:create, :update, :destroy]
    end

    unauthenticated do
      root 'devise/sessions#new', as: :unauthenticated_root
    end
  end

  resources :users, only: [:show]

  resources :bookmarks do
    member do
      put "like", to: "bookmarks#upvote"
    end
  end

  resources :topics

  # root 'devise/sessions#new'

  #API Routing
  namespace :api, defaults: { format: :json } do
    resources :bookmarks, except: [:new, :edit]
    resources :topics
  end


end
