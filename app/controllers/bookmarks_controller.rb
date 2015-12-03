class BookmarksController < ApplicationController
  before_action :find_bookmark, only: [:show, :edit, :update, :destroy]

  def index
    @bookmarks = Bookmark.all.order("created_at DESC")
  end

  def show
  end

  def new
    @bookmark = current_user.bookmarks.build
  end

  def create
    @bookmark = current_user.bookmarks.build(bookmark_params)

    if @bookmark.save
      redirect_to @bookmark, notice: "Added new bookmark"
    else
      render 'new'
    end
  end

  def edit
  end

  def update
    if @bookmark.update(bookmark_params)
      redirect_to @bookmark, notice: "Bookmark updated"
    else
      render 'edit'
    end
  end

  def destroy
    @bookmark.destroy
    redirect_to root_path, notice: "Bookmark deleted"
  end

  private

  def bookmark_params
    params.require(:bookmark).permit(:title, :description, :url)
  end

  def find_bookmark
    @bookmark = Bookmark.find(params[:id])
  end

end
