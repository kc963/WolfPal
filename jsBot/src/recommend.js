class Recommend{
    constructor(){
        this.interest = "";
        this.ugg = 0;
        this.project = 0;
        this.subjectList = [];//the list of courses related to the subject you interested
        this.resultList = new Map();//difficulty list (contain all course the user query)
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

    makeRecommend(subject, topic){
        this.makeSubjectList(subject);
        this.add2ResultList(topic);

        let count = 1;
        let print = [];
        for (let [key, value] of this.resultList) {
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

    add2ResultList(topic){
        this.resultList = new Map();

        for (let course of this.subjectList){
            switch (topic) {
                case "comprehensive":
                    this.resultList.set(course.name, this.getDifficulty(course));
                    break;
                case "by_average":

                    break;
                case "prior_asi":
                    break;
                case "prior_pro":
                    break;
                default:
                    this.resultList.set(course.name, this.getDifficulty(course));
                    break;
            }
        }

        //sort resultList
        this.resultList[Symbol.iterator] = function* () {
            yield* [...this.entries()].sort((a, b) => a[1] - b[1]);
        }

    }


}

const recommend = new Recommend();

