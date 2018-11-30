class Flux < ApplicationRecord
  has_many :articles
  validates :title, presence: true
  validates :title, uniqueness: true
  validates :url, presence: true
  # validates :url, format: { with: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
  #   message: "désolé ce n'est pas le bon format" }
end
