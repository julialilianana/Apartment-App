class ApartmentsController < ApplicationController
    before_action :set_apartment, only: [:show, :edit, :update, :destroy]
    before_action :authenticate_user!
end
