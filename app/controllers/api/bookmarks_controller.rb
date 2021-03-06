class Api::BookmarksController < ApiController
  respond_to :json

  def index
    @bookmarks = Bookmark.all
    render json: @bookmarks, each_serializer: BookmarksSerializer
  end

  def show
    @bookmark = Bookmark.find(params[:id])
    render json: @bookmark, each_serializer: BookmarkSerializer, root:false
  end


end
