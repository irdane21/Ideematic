class Flux < ApplicationRecord
  has_many :articles, dependent: :destroy
  validates :Title, presence: true
  # validates :Title, uniqueness: true
  validates :Url, presence: true
  validates :Url, format: { with: /\A(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?\z/,
    message: "désolé ce n'est pas le bon format" }
end
