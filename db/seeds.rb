20.times do
  user = User.new(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: 'password'
  )
  user.save
end

User.new(
  name: "Todd Channick",
  email: "toc5012@gmail.com",
  password: "password"
)

users = User.all

topics_arr = ["Animals", "Art", "Education", "Fashion", "Food", "Health", "Music", "News", "Productivity", "Shopping", "Sports", "Technology", "Videos"]

topics_arr.each do |title|
  topic = Topic.new(
    title: title
  )
  topic.save
end

topics = Topic.all

# 100.times do
#   bookmark = Bookmark.new(
#     user: users.sample,
#     title: Faker::Lorem.sentence,
#     description: Faker::Lorem.paragraph,
#     url: Faker::Internet.url,
#     topic: topics.sample
#   )
#   bookmark.save
# end
#
#
# puts "Seed finished"
# puts "#{Topic.count} topics created"
# puts "#{User.count} users created"
# puts "#{Bookmark.count} bookmarks created"
