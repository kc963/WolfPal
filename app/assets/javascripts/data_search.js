class DataSearch{
    constructor(){
        console.log("DataSearch constructor started.")
        this.transfercomplete = false;
        this.workload = {};
        var sync = true;
        let request = new XMLHttpRequest();
        request.open("GET", "assets/main_course.json", !sync);
        //request.responseType = 'json';
        request.send();
        request.onreadystatechange = (this.course = function() {
            if (request.readyState == 4 && request.status == "200") {
                var yourData = JSON.parse(request.response);
                return yourData["main"];
            }
        });
        this.course = JSON.parse(request.response).main;
        //request.end();
        // var yourDataStr = JSON.stringify(request.responseText)
        // this.course = JSON.parse(yourDataStr).main;


        let request2 = new XMLHttpRequest();
        request2.open("GET", "assets/average.json", !sync);
        //request.responseType = 'json';
        request2.send();
        request2.onreadystatechange = (this.average = function() {
            if (request2.readyState == 4 && request2.status == "200") {
                var yourData = JSON.parse(request2.response);
                return yourData["average"];
            }
        });
        this.average = JSON.parse(request2.response).average;
        // var yourDataStr = JSON.stringify(request.responseText)
        // this.average = JSON.parse(yourDataStr).average;

        let request3 = new XMLHttpRequest();
        request3.addEventListener("load", function(){
          console.log("Data Transfer Complete");
          this.transfercomplete = true;
        });
        request3.open("GET", "assets/workload.json", !sync);
        //request.responseType = 'json';
        request3.send();
        request3.onreadystatechange = (this.workload = function() {
            if (request3.readyState == 4 && request3.status == "200") {
                var yourData = JSON.parse(request3.response);
                console.log(yourData.workload);
                //alert("Your data: " + yourData);
                //alert("Your data - String: " + JSON.stringify(yourdata));
                return yourData.workload;
            }
        });
        this.workload = JSON.parse(request3.response).workload;
        console.log(JSON.parse(request3.response));
        // var yourDataStr = JSON.stringify(request.responseText)
        // this.workload = JSON.parse(yourDataStr).workload;

        let request4 = new XMLHttpRequest();
        request4.open("GET", "assets/category.json", !sync);
        //request.responseType = 'json';
        request4.send();
        request4.onreadystatechange = (this.category = function() {
            if (request4.readyState == 4 && request4.status == "200") {
                var yourData = JSON.parse(request4.response);
                return yourData;
            }
        });
        this.category = JSON.parse(request4.response);
        // var yourDataStr = JSON.stringify(request.responseText)
        // this.category = JSON.parse(yourDataStr);

        //alert(this.workload);
    }

    getCourseName(id){
        for (let m of this.course){
            if (id === m.syllabus_id){
                return m.course_name;
            }
        }
        /*console.log("can't find syllabusId: " + syllabusId);*/
        return "";
    }

    getCourseId(name){
        for (let c of this.course){
            if (name.localeCompare(c.course_name) == 0){
                //alert(name + "," + c.course_name + "," + c.syllabus_id);
                return c.syllabus_id;
            }
        }
        return -1;
    }

    getCourseAverage(id){
        if ( id === -1){
            return -1;
        }
        for (let c of this.average){
            if (id === c.syllabus_id){
                var total = c.A + c.B + c.C + c.D + c.Other;
                var median = total/2;
                var list = {'A':c.A, 'B':c.B, 'C':c.C, 'D':c.D, 'Other':c.Other};
                var i=-1;
                var items = Object.values(list)[++i];
                while (median > items && i<Object.keys(list).length){
                    median -= items;
                    items = Object.keys(list)[++i];
                }
                return Object.keys(list)[i];
            }
        }
        return -1;
    }

    getWorkload(id){
      //console.log("id : " + id + " : workload : " + this.workload);
      //alert("id: " + id);
      //alert(this.workload);
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
                list = list.concat(this.category.ALG);
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

//const dataSearch = new DataSearch();
//let a = dataSearch.getWorkload(14);
//console.log(a.name + ", " + a.core + ", " + a.assingment + ", " + a.exam + ", " + a.project);
