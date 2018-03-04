class Course{
    constructor(){
        //default highest workload
        this.name = "";
        this.core = 1;
        this.assingment = 2;
        this.exam = 2;
        this.project = 2;
    }

    set(name, core, assignment, exam, project){
        this.name = name;
        this.core = core;
        this.assingment = assignment;
        this.exam = exam;
        this.project = project;
    }
}

class Recommend{
    constructor(){
        this.interest = "";
        this.ugg = 0;
        this.project = 0;
        this.subjectList = [];//the list of courses related to the subject you interested
        this.diffList = new Map();//difficulty list (contain all course the user query)


    }
/*
    test(){
        let c = new Course();
        c.set("se", 1, 2, 2, 2);
        this.subjectList.push(c);
        let a = new Course();
        a.set("devOps", 1, 3, 2, 1);
        this.subjectList.push(a);
    }
*/
    setProfile(interest, ugg, project){
        this.interest = interest;
        this.ugg = (ugg*2/5).toFixed(2);
        this.project = (project*2/5).toFixed(2);
        console.log("ugg, project: " + this.ugg + ", " + this.project);
    }

    makeSubjectList(subject){
        //TODO
        //this.test();
        this.subjectList = [];
        let idList = dataSearch.getCourseList_number(subject);
        for (let il of idList) {
            this.subjectList.push(dataSearch.getWorkload(il));
        }
    }

    makeRecommend(subject){
        this.makeSubjectList(subject);//right now use test()
        this.add2diffList();
        let count = 1;
        let print = [];
        for (let [key, value] of this.diffList) {     // get data sorted
            print.push(count + ". " + key + ", difficulty: " + value);
            count++;
        }
        return print;
    }


    getDifficulty(course) {
        let string = "";
        let difficulty = course.core;
        //string += difficulty + ",a ";

        if (course.assingment > this.ugg)
            difficulty += course.assingment - this.ugg;
        //string += this.ugg + ",e ";

        if (course.exam > this.ugg)
            difficulty += course.exam - this.ugg;
        //string += this.ugg + ",p "

        if (course.project > this.project)
            difficulty += course.project - this.project;
        //string += course.project - this.project;

        console.log(string);
        return difficulty;
    }

    add2diffList(){
        this.diffList = new Map();

        for (let course of this.subjectList){
            //if ( !this.diffList.get(course.name) )
            console.log("course name " + course.name + ", diff" + this.getDifficulty(course));
            this.diffList.set(course.name, this.getDifficulty(course));
        }

        //sort diffList
        this.diffList[Symbol.iterator] = function* () {
            yield* [...this.entries()].sort((a, b) => a[1] - b[1]);
        }

    }
}

const recommend = new Recommend();

