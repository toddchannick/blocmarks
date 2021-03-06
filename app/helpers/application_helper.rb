module ApplicationHelper
  require 'embedly'
  require 'json'
  def display(url)
    embedly_api = Embedly::API.new(key: 'd3af281a9c844c278d324f78ce32c243')
    obj = embedly_api.oembed :url => url
    (obj.first.thumbnail_url).html_safe
  end

  def nav_link(link_text, link_path, http_method=nil)
    class_name = current_page?(link_path) ? 'active' : ''

    content_tag(:li, class: class_name) do
      if http_method
        link_to(link_text, link_path, method: http_method)
      else
        link_to(link_text, link_path)
      end
    end
  end

  # if any errors are found, this will set the div/div class around each element accordingly
  def form_group_tag(errors, &block)
     if errors.any?
       content_tag :div, capture(&block), class: 'form-group has-error'
     else
       content_tag :div, capture(&block), class: 'form-group'
     end
   end

end
