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
      first = rss.channel.items.first
      last = flux.articles.last

      if first.title != last.Title
        article = Article.new
        article.Title = first.title
        article.Description = first.description
        article.Url = first.link
        article.Publication = first.pubDate
        article.Lu = 0
        article.flux_id = flux.id
        article.save!
        new_hash_article[flux] = article
      else
      end
    end
  end
end
