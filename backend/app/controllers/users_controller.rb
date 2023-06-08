class UsersController < ApplicationController
 

  def create
    user = User.new(user_params)
    if user.save
      render json: user, status: :created
    else
      render json: { error: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def login
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      render json: { message: "Logged in successfully", user: user}, status: :ok
    else
      render json: { error: "Invalid email or password" }, status: :unauthorized
    end
  end

  private 

  def user_params
    params.permit(:name, :email, :password)
  end


end
