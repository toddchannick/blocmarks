class Api::BookmarksController < ApiController
  respond_to :json

  def index
    respond_with Bookmark.all
  end

end
