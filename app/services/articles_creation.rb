require 'rubygems'
require 'simple-rss'
require 'open-uri'

class ArticlesCreation

  def initialize(flux)
    @url = flux.Url
    @id = flux.id
  end

  def research
    @newarticles = []

    rss = SimpleRSS.parse open(@url)

    rss.channel.items.each do |item|
      article = Article.new
      article.Title = item.title
      article.Description = item.description
      article.Url = item.link
      article.Publication = item.pubDate
      article.Lu = 0
      article.flux_id = @id
      article.save
      @newarticles << article
    end
    @newarticles
  end
end
