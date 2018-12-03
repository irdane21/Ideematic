class ArticlesController < ApplicationController

  def index
    @articles = Articles.all
  end

  def new
    @article = Article.new
  end

  def create

  end

  def marklu
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

  def markpalu
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
end
