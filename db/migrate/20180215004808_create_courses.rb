class CreateCourses < ActiveRecord::Migration[5.1]
  def change
    create_table :courses do |t|
      t.string :code
      t.integer :syllabus_id
      t.string :prerequisites
      t.string :course_name
      t.boolean :core
      t.integer :channel_id

      t.timestamps
    end
  end
end
