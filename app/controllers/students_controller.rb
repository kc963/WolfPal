class StudentsController < ApplicationController

  before_action :authenticate_studen!, only: []

  def student_params
    params.require(:user).permit(:first_name, :last_name, :sem, :year, :email, :password, :password_confirmation)
  end

  def new
    @student = Student.new
    #@role = params[:role]
    respond_to do |format|
      format.html # new.html.erb
      format.json {render json: @student}
    end
  end

# POST /student
# POST /student.json
  def create
    @student = Student.new(student_params)

    authorize_superadmin if (@role.equal? "superadmin")

    #@student.role = User.roles[@role.to_sym]
    respond_to do |format|
      if @student.save
        flash[:notice] = "#{@role.capitalize} #{@student.name.capitalize} was successfully created."
        format.html {redirect_to action: "show_all", role: @role}
      else
        flash[:notice] = "Please verify the details"
        format.html {render action: "new"}
        format.json {render json: @student.errors, status: :unprocessable_entity}
      end
    end
  end
end
