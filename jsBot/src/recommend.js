class Recommend{
    constructor(){
        this.interest = "";
        this.ugg = 0;
        this.project = 0;
        this.subjectList = [];//the list of courses related to the subject you interested
        this.diffList = new Map();//difficulty list (contain all course the user query)
    }

    setProfile(interest, ugg, project){
        this.interest = interest;
        this.ugg = (ugg*2/5).toFixed(2);
        this.project = (project*2/5).toFixed(2);
        console.log("ugg, project: " + this.ugg + ", " + this.project);
    }

    makeSubjectList(subject){
        this.subjectList = [];
        let idList = dataSearch.makeCourseList_number(subject);
        for (let il of idList) {
            this.subjectList.push(dataSearch.getWorkload(il));
        }
    }

    makeRecommend(subject){
        this.makeSubjectList(subject);
        this.add2diffList();
        let count = 1;
        let print = [];
        for (let [key, value] of this.diffList) {
            if (count > 4)
                break;
            print.push(count + ". " + key + ", difficulty: " + value);
            count++;
        }
        return print;
    }


    getDifficulty(course) {
        let difficulty = course.core;

        if (course.assingment > this.ugg) {
            difficulty += (course.assingment - this.ugg);
        }

        if (course.exam > this.ugg) {
            difficulty += (course.exam - this.ugg);
        }

        if (course.project > this.project) {
            difficulty += (course.project - this.project);
        }

        return difficulty.toFixed(2);
    }

    add2diffList(){
        this.diffList = new Map();

        for (let course of this.subjectList){
            this.diffList.set(course.name, this.getDifficulty(course));
        }

        //sort diffList
        this.diffList[Symbol.iterator] = function* () {
            yield* [...this.entries()].sort((a, b) => a[1] - b[1]);
        }

    }
}

const recommend = new Recommend();

