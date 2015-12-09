module TopicsHelper
  def topics_to_buttons(topics)
    raw topics.map { |l| link_to l.name, topic_path(id: l.id), class: 'btn-xs btn-primary' }.join(' ')
  end
end
