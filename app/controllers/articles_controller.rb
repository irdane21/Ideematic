require 'rubygems'
require 'simple-rss'
require 'open-uri'
require 'date'


class ArticlesController < ApplicationController

  def index
    @articles_no_order = Article.where(flux_id: params[:flux_id])
    @articles = order_by_date(@articles_no_order)
    render json: @articles
  end

  def new
    @flux = Flux.find(params[:flux_id])
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
      @article = Article.new
      @article.Title = @first.title
      @article.Description = @first.description
      @article.Url = @first.link
      @article.Publication = @first.pubDate
      @article.flux_id = @flux.id
      if @article.save
        @articles_no_order = @flux.articles
        @articles = order_by_date(@articles_no_order)
        render json: @articles
      else
        render json: 0
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

  def order_by_date(articles)
    my_hash = {}
    articles.each do |article|
      d = DateTime.parse(article.Publication)
      date = DateTime.new(d.year,d.month,d.day,d.hour,d.min,d.sec,d.zone).ajd.to_f
      my_hash[date] = article
    end
    sort = my_hash.sort{|a,z|z<=>a}.to_h
    @articles = []
    sort.each do |key, value|
      @articles << value
    end
    @articles
  end
end
