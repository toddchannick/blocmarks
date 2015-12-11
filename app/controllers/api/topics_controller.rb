class Api::TopicsController < ApiController
  respond_to :json

  def index
    @topics = Topic.all
    render json: @topics
  end

end
