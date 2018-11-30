require 'nokogiri'

class ArticlesCreation

  def initialize
    @url = url
  end

  def research
    file = File.open(@url)
    document = Nokogiri::XML(file)

    document.root.xpath('item').each do |article|
      article.new
      name        = beer.xpath('name').text
      appearance  = beer.xpath('appearance').text
      origin      = beer.xpath('origin').text

      puts "#{name}, a #{appearance} beer from #{origin}"
    end
  end
end
