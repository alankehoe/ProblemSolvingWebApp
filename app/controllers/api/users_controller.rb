module Api
  class UsersController < ApplicationController
    def index
      @users = User.all
      respond_with @users
    end

    def create
      @user = User.create! user_params
      respond_with @user
    end

    private

    def user_params
      params.require(:user).permit :email,
                                   :username,
                                   :password,
                                   :password_confirmation
    end
  end
end
