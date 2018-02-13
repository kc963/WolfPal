/*

WHAT IS THIS?

This module demonstrates simple uses of Botkit's `hears` handler functions.

In these examples, Botkit is configured to listen for certain phrases, and then
respond immediately with a single line response.

*/

module.exports = function(controller) {


    controller.hears(['^hello$'], 'direct_message,direct_mention', function(bot, message) {
        bot.reply(message, "Hi there, you're on workspace: " + message.team)
    });


    controller.on('direct_message,direct_mention', function(bot, message) {
        if (matchKeywords(message.text) )
            bot.reply(message, "sentence contains graduation and subject");
        else
            bot.reply(message, "I don't understand");
    });


    controller.hears(['^say (.*)','^say'], 'direct_message,direct_mention', function(bot, message) {
        if (message.match[1]) {
            bot.reply(message, "ok, " + message.match[1]);//match[1] is (.*), match[0] is whole sentence
        } else {
            bot.reply(message, 'I will repeat whatever you say.')
        }
    });


    controller.hears(['color'], 'direct_message,direct_mention', function(bot, message) {

        bot.startConversation(message, function(err, convo) {
            convo.say('This is an example of using convo.ask with a single callback.');

            convo.ask('What is your favorite color?', function(response, convo) {

                convo.say('Cool, I like ' + response.text + ' too!');
                convo.next();

            });
        });

    });


    controller.hears(['suggestion'], 'direct_message,direct_mention', function(bot, message) {
        bot.startConversation(message, function(err, convo) {
            convo.say('This is an example of using convo.ask with a single callback.');

            convo.ask('need suggestions?', function(response, convo) {
                var user = response.text.toLowerCase().search("yes");
                if (user >= 0) {
                    convo.ask('area of interest?', function (response, convo) {
                        user = response.text.toLowerCase().search("software engineering");
                        if (user >= 0){
                            convo.say("you said " + response.text);
                        }
                        else{
                            convo.say("Ok, you said " + response.text );
                        }
                        convo.next();
                    });
                }
                convo.next();
            });
        });
    });//end of suggestion
};

var list = ['graduation', 'subject'];

var matchKeywords =  function(message){
    var strings = message.toLowerCase().split(" ");
    var containAll = true;

    for (var l = 0; l < list.length; l++){
        if (!containAll)
            return false;

        var containThis = false;
        for (var s = 0; s < strings.length; s++){
            if (list[l]===strings[s]){
                containThis = true;
                break;
            }
        }

        if(!containThis)
            return false;
    }
    return true;
}
