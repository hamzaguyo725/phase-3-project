require 'net/http'
require 'json'

# step one

url = URI.parse('https://api.themoviedb.org/3/movie/popular?api_key=92b23f2d79bd0e8ef7bf30f434854793&language=en-US&page=1')
http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true if url.scheme == 'https'

request = Net::HTTP::Get.new(url.request_uri)
response = http.request(request)

if response.code == '200'
  data = JSON.parse(response.body)

  # Process the retrieved data and create records in your database
  data['results'].each do |movie_data|
    Movie.create(original_title: movie_data['original_title'], overview: movie_data['overview'], popularity: movie_data['popularity'], poster_path: movie_data['poster_path'], release_date: movie_data['release_date'], vote_count: movie_data['vote_count'], vote_average: movie_data['vote_average'], genre: "popular")
  end
else
  puts "API request failed with response code: #{response.code}"
end




url = URI.parse('https://api.themoviedb.org/3/movie/top_rated?api_key=92b23f2d79bd0e8ef7bf30f434854793&language=en-US&page=1')
http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true if url.scheme == 'https'

request = Net::HTTP::Get.new(url.request_uri)
response = http.request(request)

if response.code == '200'
  data = JSON.parse(response.body)

  # Process the retrieved data and create records in your database
  data['results'].each do |movie_data|
    Movie.create(original_title: movie_data['original_title'], overview: movie_data['overview'], popularity: movie_data['popularity'], poster_path: movie_data['poster_path'], release_date: movie_data['release_date'], vote_count: movie_data['vote_count'], vote_average: movie_data['vote_average'], genre: "top_rated")
  end
else
  puts "API request failed with response code: #{response.code}"
end




url = URI.parse('https://api.themoviedb.org/3/movie/now_playing?api_key=92b23f2d79bd0e8ef7bf30f434854793&language=en-US&page=1')
http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true if url.scheme == 'https'

request = Net::HTTP::Get.new(url.request_uri)
response = http.request(request)

if response.code == '200'
  data = JSON.parse(response.body)

  # Process the retrieved data and create records in your database
  data['results'].each do |movie_data|
    Movie.create(original_title: movie_data['original_title'], overview: movie_data['overview'], popularity: movie_data['popularity'], poster_path: movie_data['poster_path'], release_date: movie_data['release_date'], vote_count: movie_data['vote_count'], vote_average: movie_data['vote_average'], genre: "now_playing")
  end
else
  puts "API request failed with response code: #{response.code}"
end
