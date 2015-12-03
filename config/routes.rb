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
  resources :bookmarks

  root 'devise/sessions#new'

  # devise_scope :user do
  #   authenticated :user do
  #     root 'bookmarks#index', as: :authenticated_root
  #     resources :bookmarks
  #   end
  #
  #   unauthenticated do
  #     root 'bookmarks#index', as: :unauthenticated_root
  #   end
  # end


end
