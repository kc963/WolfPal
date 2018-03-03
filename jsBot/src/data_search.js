class DataSearch{
    constructor(){
        let request = new XMLHttpRequest();
        request.open("GET", "data/main_course.json", false);
        request.send(null);
        this.course = JSON.parse(request.responseText);
        //core course, and prerequisites

        request.open("GET", "data/average.json", false);
        request.send(null);
        this.average = JSON.parse(request.responseText);

        request.open("GET", "data/workload.json", false);
        request.send(null);
        this.workload = JSON.parse(request.responseText);

    }

    isCore(name){
        let find = false;
        for (let c of this.course.main){
            if ( c.course_name === name){
                console.log("find course:" + name + ", core course: " + c.core);
                return;
            }
        }
        console.log("cannot find course: " + name);
    }


}

const dataSearch = new DataSearch();
dataSearch.isCore("Software Engineering");