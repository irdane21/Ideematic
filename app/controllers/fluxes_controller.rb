class FluxesController < ApplicationController

  def index
    @fluxes = Flux.all
    @flux = Flux.new
    @my_hash = {}
    @fluxes.each do |flux|
      @articles = []
      flux.articles.each do |article|
        @articles << article
      end
      @flux.articles = Article.paginate(:page => params[:page], :per_page => 5)
      @my_hash[flux] = @articles
    end
    @my_hash
  end

  def new
    @flux = Flux.new
  end

  def create
    @fluxes = Flux.all
    @flux = Flux.new(flux_params)
    if @flux.save
      @newarticles = ArticlesCreation.new(@flux).research
      respond_to do |format|
        format.html { redirect_to fluxes_path(@newarticles) }
        format.js
      end
    else
      respond_to do |format|
        format.html { redirect_to fluxes_path(@fluxes) }
        format.js
      end
    end
  end

  def actu
    @fluxes = Flux.all
    @new_hash_article = Actualisation.new(@fluxes).call
    if @new_hash_article.length >= 1
      @new_hash_article.each do |key, value|
        @flux = key
        @article = value
        respond_to do |format|
          format.js
        end
      end
    end
  end

  private

  def flux_params
    params.require(:flux).permit(:Url, :Title)
  end
end

