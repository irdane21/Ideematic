class FluxesController < ApplicationController

  def index
    @fluxes = Flux.all.order(created_at: params[:order] || :desc)
  end

  def new
    @flux = Flux.new
    render json: @flux
    # respond_to do |format|
    #   format.js
    #   format.html { redirect_to fluxes_path }
    # end
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

