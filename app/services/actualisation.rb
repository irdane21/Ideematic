require 'rubygems'
require 'simple-rss'
require 'open-uri'

class Actualisation

  def initialize(fluxes)
    @fluxes = fluxes
  end

  def call
    new_hash_article = {}

    @fluxes.each do |flux|
      url = flux.Url
      rss = SimpleRSS.parse open(url)
      @array_items = []
      rss.channel.items.each do |item|
        @array_items << item
      end
      @first = @array_items.first
      @recent = flux.articles.first
      if @first.title != @recent.Title
        article = Article.new
        article.Title = @first.title
        article.Description = @first.description
        article.Url = @first.link
        article.Publication = @first.pubDate
        article.Lu = 0
        article.flux_id = flux.id
        article.save!
        new_hash_article[flux] = article
      else
      end
    end
    return new_hash_article
  end
end
