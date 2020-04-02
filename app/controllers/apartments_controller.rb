class ApartmentsController < ApplicationController
    before_action :set_apartment, only: [:show, :edit, :update, :destroy]
    before_action :authenticate_user!
    
    def index
        render json: Apartment.all
    end
    
    def create
        apartment = Apartment.create(apartment_params)
        render json: apartment
    end
    
    def destroy
        Apartment.destroy(params[:id])
    end
    
    def update
        apartment = Apartment.find(params[:id])
        apartment.update_attributes(apartment_params)
        render json: apartment
    end
    
    private
    
    def apartment_params
        params.require(:apartment).permit(:id, :state, :city, :postal_code, :state, :country)
    end
        
end