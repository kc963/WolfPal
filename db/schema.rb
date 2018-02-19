# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180218070647) do

  create_table "average_grades", force: :cascade do |t|
    t.integer "A"
    t.integer "B"
    t.integer "C"
    t.integer "D"
    t.integer "Other"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "syllabus_id"
  end

  create_table "courses", force: :cascade do |t|
    t.string "code"
    t.integer "syllabus_id"
    t.string "prerequisites"
    t.string "course_name"
    t.boolean "core"
    t.integer "channel_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "professors", force: :cascade do |t|
    t.string "email_id"
    t.string "name"
    t.string "website"
    t.string "research"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "schedules", force: :cascade do |t|
    t.string "semester"
    t.string "day"
    t.string "time"
    t.boolean "project"
    t.boolean "fieldwork"
    t.integer "ratings"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "syllabus_id"
  end

  create_table "students", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "first_name", default: "", null: false
    t.string "last_name", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "year"
    t.integer "sem"
    t.index ["email"], name: "index_students_on_email", unique: true
    t.index ["reset_password_token"], name: "index_students_on_reset_password_token", unique: true
  end

  create_table "tracks", force: :cascade do |t|
    t.string "name"
    t.integer "core"
    t.integer "alg"
    t.integer "dse"
    t.integer "ss"
    t.integer "sf"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
