class Course{
    constructor(){
        this.name = "";
        this.core = 0;
        this.assingment = 0;
        this.exam = 0;
        this.project = 0;
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

        this.test();
    }

    test(){
        let c = new Course();
        c.set("se", 1, 2, 2, 2);
        this.subjectList.push(c);
        let a = new Course();
        a.set("devOps", 1, 3, 2, 1);
        this.subjectList.push(a);
    }

    setProfile(interest, ugg, project){
        this.interest = interest;
        this.ugg = ugg;
        this.project = project;
    }

    makeSubjectList(subject){
        //TODO
    }

    makeRecommend(){
        this.makeSubjectList();//right now use test()
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
        let difficulty = course.core;
        if (course.assingment > this.ugg)
            difficulty += course.assingment - this.ugg;

        if (course.exam > this.ugg)
            difficulty += course.exam - this.ugg;

        if (course.project > this.project)
            difficulty += course.project - this.project;

        return difficulty;
    }

    add2diffList(){
        for (let course of this.subjectList){
            if ( !this.diffList.get(course.name) )
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

