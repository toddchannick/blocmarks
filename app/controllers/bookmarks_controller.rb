class BookmarksController < ApplicationController

  before_action :find_bookmark, only: [:show, :edit, :update, :destroy, :upvote]
  before_action :find_topics
  before_action :authenticate_user!, except: [:index, :show]

  def index
    if params[:topic_id]
      @bookmarks = Bookmark.where(topic_id: params[:topic_id])
    elsif params[:topic] == "all"
      @bookmarks = Bookmark.all.order("created_at DESC")
    else
      @bookmarks = Bookmark.all.order("created_at DESC")
    end
  end

  def show
  end

  def new
    @bookmark = current_user.bookmarks.build
  end

  def create
    @bookmark = current_user.bookmarks.build(bookmark_params)

    if @bookmark.save
      redirect_to action: "index", notice: "Added new bookmark"
    else
      render 'new'
    end
  end

  def edit
  end

  def update
    if @bookmark.update(bookmark_params)
      redirect_to action: "index", notice: "Bookmark updated"
    else
      render 'edit'
    end
  end

  def destroy
    @bookmark.destroy
    redirect_to bookmarks_path, notice: "Bookmark deleted"
  end

  def upvote
    @bookmark.upvote_by current_user
    redirect_to :back
  end

  private

  def bookmark_params
    params.require(:bookmark).permit(:url, :title, :description, :topic_id)
  end

  def find_bookmark
    @bookmark = Bookmark.find(params[:id])
  end

  def find_topics
    @topics = Topic.all
  end

end
