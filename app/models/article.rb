class Article < ApplicationRecord
  belongs_to :flux
  self.per_page = 5
end
