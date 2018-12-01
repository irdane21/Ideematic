class FluxesController < ApplicationController

  def index
    @fluxes = Flux.all
    @flux = Flux.new
  end

  def create
    @flux = Flux.new(flux_params)
    @flux.save
    @newarticles = ArticlesCreation.new(url: @flux.url, id: @flux.id).research
  end

  private

  def flux_params
    params.require(:flux).permit(:url, :title)
  end

end
