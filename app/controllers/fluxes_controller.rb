class FluxesController < ApplicationController

  def index
    @fluxes = Flux.all.order(created_at: params[:order] || :desc)
  end

  def new
    @flux = Flux.new
    render json: @flux
  end

  def create
    @fluxes = Flux.all
    @flux = Flux.new(flux_params)
    if @flux.save
      @newarticles = ArticlesCreation.new(@flux).research
      render json: @flux
    else
      respond_to do |format|
        format.html { redirect_to fluxes_path(@fluxes) }
      end
    end
  end

  private

  def flux_params
    params.require(:flux).permit(:Url, :Title)
  end
end

