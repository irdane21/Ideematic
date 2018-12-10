require 'rubygems'
require 'simple-rss'
require 'open-uri'

class ArticlesController < ApplicationController

  def index
    p params[:id]
    @articles = Article.where(flux_id: params[:id])
    render json: @articles
  end

  def new
    @fluxes = Flux.all

    @fluxes.each do |flux|
      @array_items = call(flux)
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
        article.flux_id = flux.id
        @article = article
        if @article.save
          @flux = flux
          respond_to do |format|
            format.js
            format.html { redirect_to fluxes_path(@fluxes) }
          end
        end
      end
    end
  end

  def read
    @fluxes = Flux.all
    @article = Article.find(params[:id])
    @article.Lu = 1
    @flux = Flux.find(@article.flux_id)
    if @article.save
      respond_to do |format|
        format.html { redirect_to fluxes_path(@fluxes) }
        format.js
      end
    else
      respond_to do |format|
        format.html { redirect_to fluxes_path(@fluxes) }
        format.js
      end
    end
  end

  def unread
    @fluxes = Flux.all
    @article = Article.find(params[:id])
    @article.Lu = 0
    if @article.save
      respond_to do |format|
        format.html { redirect_to fluxes_path(@fluxes) }
        format.js
      end
    else
      respond_to do |format|
        format.html { redirect_to fluxes_path(@fluxes) }
        format.js
      end
    end
  end

  private

  def call(flux)
    url = flux.Url
    rss = SimpleRSS.parse open(url)
    @array_items = []
    rss.channel.items.each do |item|
      @array_items << item
    end
    return @array_items
  end

end
