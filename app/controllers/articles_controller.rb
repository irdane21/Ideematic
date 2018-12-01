class ArticlesController < ApplicationController

  def index
    @articles = Articles.all
  end

  def new
    @article = Article.new
  end

  def create

  end

  def read

  end
end
