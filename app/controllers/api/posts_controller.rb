module Api
  class PostsController < ApplicationController
    def index
      @posts = Post.all
      respond_with @posts
    end

    def show
      respond_with @post
    end

    def create
      @post = Post.create! post_params
      respond_with @post
    end

    def update
      @post.update post_params
      respond_with @post
    end

    def destroy
      @post.destroy
      respond_with @post
    end

    private

    def set_post
      @post = Post.find(params[:id])
    end

    def post_params
      params.require(:post).permit :title,
                                   :content
    end
  end
end
