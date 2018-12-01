require 'nokogiri'

class ArticlesCreation

  def initialize
    @url = url
    @id = id
  end

  def research
    file = File.open(@url)
    document = Nokogiri::XML(file)

    document.root.xpath('item').each do |article|
      article = Article.new
      article.title = item.xpath('title').text
      article.description = item.xpath('description').text
      article.url = item.xpath('link').text
      article.publication = item.xpath('pubDate').text
      article.lu = 0
      article.flux_id = @id
      article.save
    end
  end
end
