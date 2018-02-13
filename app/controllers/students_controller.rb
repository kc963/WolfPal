class StudentsController < ApplicationController

  before_action :authenticate_studen!, only: []
end
