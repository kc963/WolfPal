var Chat = function() {
    var messages = document.querySelector('.messages');
    var request = new XMLHttpRequest();
    var topic = "";
    request.open("GET", "data/profile.json", false);
    request.send(null)
    var profile = JSON.parse(request.responseText);


    function output(text, bot, delay) {
        var bot = bot || false;
        var delay = delay || 0;
        var message = document.createElement('div');
        message.className = bot ? 'message bot' : 'message';
        message.innerHTML = text;

        setTimeout(function(){
            messages.appendChild(message);
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
            case "interest":
                profile.interest.answer = input;
                talk();
                break;
            case "ugg":
                if (input>=0 && input<=5)
                    profile.ugg.answer = input;
                else
                    output("number must between 0 and 5", true);
                talk();
                break;
            case "project":
                if (input>=0 && input<=5)
                    profile.project.answer = input;
                else
                    output("number must between 0 and 5", true);
                talk();
                break;
            case "other":
                if (input === "suggest")
                    suggestion();
                else
                    detail(input);
                talk();
                break;
        }
    }

    function talk() {

        if (profile.interest.answer === ""){
            topic = "interest";
            requiredInt();
        }

        else if (profile.ugg.answer === ""){
            topic = "ugg";
            requiredUgg();
        }

        else if (profile.project.answer === ""){
            topic = "project";
            requiredPro();
        }
        else {
            topic = "other";
            chat();
        }



    }

    function chat() {
        output("If you need course suggestion for your interested subject, type \"suggest\"." +
            "If you want to see detail of specific course, type \"course name\"", true);
    }

    function requiredInt() {
        var question = profile.interest.question;
        output(question, true);
    }

    function requiredUgg() {
        var question = profile.ugg.question;
        output(question, true);
    }

    function requiredPro() {
        var question = profile.project.question;
        output(question, true);
    }

    function sample() {
        output('', true, 1000);
    }

    function init() {
        output('Hey pal, I can help you with course selection, if you tell me a bit about yourself.', true);
        talk();
    }


    function suggestion() {
        output("give suggestion", true);
    }
    function detail(course) {
        output("give detail", true);
    }



    return {
        init: init,
        input: input
    }

}();

(function(){
    Chat.init();
}());
