class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.string :original_title
      t.text :overview
      t.string :vote_count
      t.string :vote_average
      t.string :genre
      t.string :popularity
      t.string :release_date
      t.string :poster_path

      t.timestamps
    end
  end
end
