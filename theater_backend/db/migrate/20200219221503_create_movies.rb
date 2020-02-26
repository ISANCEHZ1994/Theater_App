class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :description
      t.string :mpaa
      t.string :poster
      t.string :released
      t.string :trailer
      t.string :category

      t.timestamps
    end
  end
end
