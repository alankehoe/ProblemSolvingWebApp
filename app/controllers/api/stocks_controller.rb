module Api
  class StocksController < ApplicationController
    def index
      @stocks = Stock.all

      respond_with @stocks
    end

    def show
      @stock = Stock.find(params[:id])

      respond_with @stock
    end

    def create
      @stock = Stock.create!(stock_params)

      respond_with @stock
    end

    def update
    end

    def destroy
    end

    private

    def stock_params
      params.require(:stock).permit(:company, :price, :change, :percent_change, :volume, :ytd_change)
    end
  end
end

