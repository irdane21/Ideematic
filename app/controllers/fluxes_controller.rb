class FluxesController < ApplicationController
  require 'date'

  def index
    # @fluxes = {}
    # Flux.all.each do |flux|
    #   articles = flux.articles.sort { |x,y|
    #     if Date.parse(x.Publication) - Date.today > Date.parse(y.Publication) - Date.today
    #       y <=> x
    #     else
    #       x <=> y
    #     end
    #   articles = Article.paginate(:page => params[:page], :per_page => 5)
    #   @fluxes[flux] = articles
    #   }
    # end
    @fluxes = Flux.all
  end

  def new
    @flux = Flux.new
    render json: @flux
    respond_to do |format|
      format.js
      format.html { redirect_to fluxes_path }
    end
  end

  def create
    @fluxes = Flux.all
    @flux = Flux.new(flux_params)
    if @flux.save
      @newarticles = ArticlesCreation.new(@flux).research
      respond_to do |format|
        format.html { redirect_to fluxes_path }
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

  def flux_params
    params.require(:flux).permit(:Url, :Title)
  end
end

