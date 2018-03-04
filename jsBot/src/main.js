/*
 * The structure of chat bot is reference form "tscok"
 * code( http://jsfiddle.net/tscok/0jyu98L2/ )
 */

var Chat = function() {
    var messages = document.querySelector('.messages');
    var topic = "";//for input search

    var request = new XMLHttpRequest();
    request.open("GET", "data/profile.json", false);
    request.send(null);
    var profile = JSON.parse(request.responseText);


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
        switch(topic){
            /*
            case "interest":
                profile.interest.answer = input;
                break;
                */
            case "ugg":
                if ( input>=0 && input<=5)
                    profile.ugg.answer = input;
                else
                    output("number must between 0 and 5", true);
                break;
            case "project":
                if (input>=0 && input<=5) {
                    profile.project.answer = input;
                    recommend.setProfile(profile.interest.answer, profile.ugg.answer, profile.project.answer);
                }
                else
                    output("number must between 0 and 5", true);
                break;
            case "other":
                if (input.includes("suggest"))
                    suggestion(input);
                else
                    detail(input);
                break;
        }
        talk();
    }

    function talk() {
/*
        if (profile.interest.answer === ""){
            topic = "interest";
            requiredInt();
        }
        else*/ if (profile.ugg.answer === ""){
            topic = "ugg";
            requiredUgg();
        }
        else if (profile.project.answer === ""){
            topic = "project";
            requiredPro();
        }
        else {
            topic = "other";
            other();
        }
    }

    function other() {
        output("Type \"suggest + subject\" for suggest courses based on the subject, " +
            "or type \"average + course_name\" for course detail", true, 500);
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

    function suggestion(input) {

        let subject = "";
        if (input.includes("data science"))
            subject = "data science";
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

        if (subject != "") {
            let print = recommend.makeRecommend(subject);
            for (let p of print) {
                output(p, true, 500);
            }
        }
        else
            output("Sorry, can't find courses related to this subject", true, 500);
    }
    function detail(course) {
        var string = "give detail of ";
        output( string , true, 500);
    }



    function init() {
        output('Hey pal, I can help you with course selection, if you tell me a bit about yourself.', true);
        talk();

    }

    return {
        init: init,
        input: input
    }

}();

(function(){
    Chat.init();
}());


