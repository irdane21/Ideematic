require 'rubygems'
require 'simple-rss'
require 'open-uri'

class ArticlesController < ApplicationController

  def index
    @articles = Article.where(flux_id: params[:id])
    render json: @articles
    #@articles = Article.paginate(:page => params[:page], :per_page => 5)
    # render json: {
    #   article: @articles,
    #   page: @articles.current_page,
    #   pages: @articles.total_pages,
    # }
  end

  def new
    @flux = Flux.find(params[:id])

    @array_items = call(@flux)
    @first = @array_items.first
    calculator = 0
    @flux.articles.each do |article|
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
      article.flux_id = @flux.id
      @article = article
      if @article.save
        render json: @article
      end
    else
      render json: 0
    end
  end

  def read
    @fluxes = Flux.all
    @article = Article.find(params[:id])
    @article.Lu = true
    @flux = Flux.find(@article.flux_id)
    if @article.save
      render json: @article
    else
      redirect_to fluxes_path(@fluxes)
    end
  end

  def unread
    @fluxes = Flux.all
    @article = Article.find(params[:id])
    @article.Lu = false
    if @article.save
      render json: @article
    else
      redirect_to fluxes_path(@fluxes)
    end
  end

  private

  def call(flux)
    url = @flux.Url
    rss = SimpleRSS.parse open(url)
    @array_items = []
    rss.channel.items.each do |item|
      @array_items << item
    end
    return @array_items
  end

end
