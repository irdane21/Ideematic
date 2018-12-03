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
      calculator = 0
      flux.articles.each do |article|
        if article.Publication == @first.pubDate.to_s
          calculator += 1
        else
          calculator += 0
        end
      end
      if calculator == 0
        article = Article.new
        article.Title = @first.title
        article.Description = @first.description
        article.Url = @first.link
        article.Publication = @first.pubDate
        article.Lu = 0
        article.flux_id = flux.id
        article.save
        new_hash_article[flux] = article
      end
    end
    return new_hash_article
  end
end

