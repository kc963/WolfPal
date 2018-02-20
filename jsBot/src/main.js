var Chat = function() {
    var messages = document.querySelector('.messages');
    //var shortNo, longNo, email;
    var interest, ugg, project;

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
        interest = input;
        output('Cool! You are interesting in ' + interest, true);
    }

    function talk() {
        if (typeof interest=== 'undefined'){
            requiredInt();
        }

        if (typeof ugg=== 'undefined'){
            requiredUgg();
        }

        if (typeof project=== 'undefined'){
            requiredPro();
        }
    }

    function requiredInt() {
        output('What is your area of interest?',true);

    }

    function sample() {
        output('', true, 1000);
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
