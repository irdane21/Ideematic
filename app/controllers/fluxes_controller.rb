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

  private

  def flux_params
    params.require(:flux).permit(:Url, :Title)
  end

end
