class DataSearch{
    constructor(){
        let request = new XMLHttpRequest();
        request.open("GET", "data/main_course.json", false);
        request.send(null);
        this.course = JSON.parse(request.responseText).main;

        request.open("GET", "data/average.json", false);
        request.send(null);
        this.average = JSON.parse(request.responseText).average;

        request.open("GET", "data/workload.json", false);
        request.send(null);
        this.workload = JSON.parse(request.responseText).workload;

        request.open("GET", "data/category.json", false);
        request.send(null);
        this.category = JSON.parse(request.responseText);
    }

    getCourseName(id){
        for (let m of this.course){
            if (id === m.syllabus_id){
                return m.course_name;
            }
        }
        console.log("can't find syllabusId: " + syllabusId);
        return "";
    }

    getWorkload(id){
        for (let w of this.workload){
            if (id === w.syllabus_id){
                let c = new Workload();
                c.set(this.getCourseName(id), w.core, w.assignments, w.exams, w.project);
                return c;
            }
        }
        console.log("can't getWorkload of this id: " + id);
        let c = new Workload();
        c.name = this.getCourseName(id);
        return c;
    }

    /*
        give subject name then return a list of course that related to the subject
     */
    makeCourseList_number(subject){
        let list = [];
        switch(subject){
            case "data science":
                list = list.concat(this.category.DSC);
                break;
            case "software engineering":
                list = list.concat(this.category.SEC);
                list = list.concat(this.category.SF);
                break;
            case "algorithm":
                list = list.concat(this.category.ALG);
                break;
            case "application":
                list = list.concat(this.category.APP);
                break;
            case "system":
                list = list.concat(this.category.SYS);
                break;
            case "software security":
                list = list.concat(this.category.SS);
                break;
        }

        console.log("get course list(number): " + list);
        return list;

    }//end of getCourseList

    makeCourseList_name(subject){
        let list = this.makeCourseList_number(subject);
        let cNameList = [];
        for(let l of list){
            cNameList.push(this.getCourseName(l));
        }
        console.log("get course list(name): " + cNameList);
        return cNameList;
    }

}

const dataSearch = new DataSearch();
//let a = dataSearch.getWorkload(14);
//console.log(a.name + ", " + a.core + ", " + a.assingment + ", " + a.exam + ", " + a.project);