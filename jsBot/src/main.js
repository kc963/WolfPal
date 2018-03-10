/*
 * The structure of chat bot is reference form "tscok"
 * code( http://jsfiddle.net/tscok/0jyu98L2/ )
 */

var Chat = function() {
    var dataSearch = new DataSearch();
    var messages = document.querySelector('.messages');
    var topic = "";//input switch
    var subject = "software engineering"; //execute on "other" topic
    var buttonId = 0;

    var request = new XMLHttpRequest();
    request.open("GET", "data/profile.json", false);
    request.send(null);
    var profile = JSON.parse(request.responseText);

    function outputButton(text, id, delay){
        var delay = delay || 0;
        var b = document.createElement('BUTTON');
        b.appendChild(document.createTextNode(text));
        b.className = 'button';
        b.setAttribute("id", id);
        b.setAttribute("name", id + buttonId);
        b.setAttribute("onClick", "Chat.pressedButton(this.id)");
        setTimeout(function(){
            messages.appendChild(b);
            var objDiv = document.getElementById("chatText");
            objDiv.scrollTop = objDiv.scrollHeight;
        },delay);
    }

    function pressedButton(id){
        console.log(id+(buttonId-1));
        document.getElementsByName("input")[0].setAttribute("contenteditable", "true");
        document.getElementsByName(id+(buttonId-1))[0].setAttribute("style", "background:  #FF5733  ;");
        topic = id;
        switch(topic){
            case "suggest_course":
                how2recommend();
                break;
            case "change_AOI":
                getAoI();
                break;
            case "course_detail":
                getCourse();
                break;
            case "about_me":
                aboutMe();
                break;
            case "recommend":
                suggestion();
                talk();
                break;
            case "related":
                output("The courses related to " + subject + " is: " , true);
                output( dataSearch.makeCourseList_name(subject) , true);
                talk();
                break;
            default:
                output(id, true, 500);
                talk();

        }
    }
    function how2recommend() {
        output("Your interest subject is '" + subject + "', what do you want to know?", true, 500);
        outputButton("List of courses related to subject", "related", 500);
        outputButton("Recommend courses", "recommend", 500);
        outputButton("Change interest subject", "change_AOI", 500);
        buttonId++;
    }

    function output(text, bot, delay) {
        var bot = bot || false;
        var delay = delay || 0;
        var message = document.createElement('div');
        message.className = bot ? 'message bot' : 'message';
        message.innerHTML = text;

        //animate
        setTimeout(function(){
            messages.appendChild(message);
            var objDiv = document.getElementById("chatText");
            objDiv.scrollTop = objDiv.scrollHeight;
        }, delay);
    }

    function input(evt) {
        switch (evt.which) {
            case 13:
                evt.preventDefault();
                output(evt.target.innerHTML, false);
                handleInput(evt.target.innerHTML);
                evt.target.innerHTML = '';
                break;
        }
    }

    function handleInput(input) {
        input = input.replace("<br>", "").toLowerCase();
        console.log(input);
        switch(topic){
            case "ugg":
                if ( input>=0 && input<=5)
                    profile.ugg.answer = input;
                else
                    output("Number must between 0 and 5.", true);
                break;
            case "project":
                if (input>=0 && input<=5) {
                    profile.project.answer = input;
                    recommend.setProfile(profile.interest.answer, profile.ugg.answer, profile.project.answer);
                }
                else
                    output("Number must between 0 and 5.", true);
                break;
            case "course_detail":
                detail(input);
                break;
            case "aoi":
                setSubject(input);
                break;
        }
        talk();
    }

    function talk() {
        if (profile.ugg.answer === ""){
            topic = "ugg";
            requiredUgg();
        }
        else if (profile.project.answer === ""){
            topic = "project";
            requiredPro();
        }
        else {
            topic = "other";
            //other();
            //  TODO//why????
            setTimeout(function(){
                other();
            }, 1000);
        }
    }

    function other() {
        //output("Type \"suggest + subject\" for suggest courses based on the subject, " +
        //    "or type \"course_name\" to get course detail.", true, 500);
        //    sleep(1000);
        //}
        document.getElementsByName("input")[0].setAttribute("contenteditable", "false");
        output("Pick one category below in which you need help", 500);
        outputButton("Suggest Course", "suggest_course",500);
        outputButton("Course Detail", "course_detail",500);
        outputButton("About me", "about_me", 500);
        buttonId++;

    }


    function requiredInt() {
        var question = profile.interest.question;
        output(question, true, 500);
    }

    function requiredUgg() {
        var question = profile.ugg.question;
        output(question, true, 500);
    }

    function requiredPro() {
        var question = profile.project.question;
        output(question, true, 500);
    }

    function setSubject(input){
        //var subject = "";
        if (input.includes("data science")) {
            subject = "data science";
            how2recommend();
        }
        else if (input.includes("software engineering"))
            subject = "software engineering";
        else if (input.includes("algorithm"))
            subject = "algorithm";
        else if (input.includes("application"))
            subject = "application";
        else if (input.includes("system"))
            subject = "system";
        else if (input.includes("software security"))
            subject = "software security";
        else
            output("Sorry, can't find courses related to this subject.", true, 500);

    }

    function getCourse(){
        output("Enter course name(Data Structures) or code(csc540).", true, 500);
    }

    function getAoI(){
        topic = "aoi";
        output("Can you tell me your area of interest?", true, 500);
    }

    function sleep(ms){
        var start_time = new Date().getTime();
        while((new Date().getTime() - start_time) < ms){}
    }

    function suggestion() {

        if (subject !== "") {
            //output("The courses related to " + subject + " is: " , true);
            //output( dataSearch.makeCourseList_name(subject) , true);
            //setTimeout(function(){
                output("Top 4 recommendations for you are: ", true, 500);
                var print = recommend.makeRecommend(subject, topic);
                for (var p of print) {
                    output(p, true, 550);
                }
            //}, 500);
        }
        else
            output("Sorry, can't find courses related to this subject.", true, 500);
    }

    function detail(input) {
        var courseId = dataSearch.getCourseId(input);
        if (courseId <0)
            output("Sorry, can't find this course, please try another course name", true, 500 );
        else {
            var courseAverage = (courseId === -1) ? -1 : dataSearch.getCourseAverage(courseId);
            output(" ''" + dataSearch.getCourseName(courseId)+ "'' ", true, 500);
            var string = "Average grade on last year is: " + courseAverage;
            output(string, true, 500);

            var coursePrereq = dataSearch.getCoursePrereq(courseId);
            if (coursePrereq !== null) {
                string = "The prerequisites are: " + coursePrereq;
                output(string, true, 500);
            }
        }
    }

    function aboutMe(){
        //output("<a href=\"url\">string</a>",true);
        output("<a href=\"https://github.com/ragarwa7/WolfPal\">See details on project github page</a>",true);
        talk();
    }

    function init() {
        output('Hey pal, I can help you with course selection, if you tell me a bit about yourself.', true);
        talk();
    }

    return {
        init: init,
        input: input,
        pressedButton: pressedButton
    }

}();

(function(){
    Chat.init();
}());
