Rails.application.routes.draw do
  get 'group/predictor'
  get 'group/:id', to: 'group#show', as: :group
  resources :teams do 
    collection do 
      post "update_teams"
    end
  end
  resources :players, only: [:index]
  root 'teams#new'
  
end
