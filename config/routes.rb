Rails.application.routes.draw do
  resources :tracks
  resources :professors
  resources :courses
  devise_for :students

  root 'students#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
