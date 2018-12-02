class FluxesController < ApplicationController

  def index
    @fluxes = Flux.all
    @flux = Flux.new

  end

  def new
    @flux = Flux.new
  end

  def create
    @flux = Flux.new(flux_params)
    if @flux.save
      @newarticles = ArticlesCreation.new(@flux).research
    else
      raise
    end
  end

  def actu
    @fluxes = Flux.all
    @new_hash_article = Actualisation.new(@fluxes).call
    gon.newarticles = @new_hash_article
  end

  private

  def flux_params
    params.require(:flux).permit(:Url, :Title)
  end
end
