class BookmarksSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :url, :topic, :user, :created_at, :image

  def image
    embedly_api = Embedly::API.new(key: 'd3af281a9c844c278d324f78ce32c243')
    obj = embedly_api.oembed :url => self.url
    (obj.first.thumbnail_url).html_safe
  end
end
