$(function() {
  // Declaring variables
  var $chatInput = $('#chat');
  // var isTyping = false;

  // Event listening on Chat box
  $('#chat').keypress(function parseText(event){
  	var keycode = event.keycode || event.which;
    var message;

  	if (keycode == '13') {
      message = $chatInput.val();
  		if (message !== "") {
        $chatInput.val(""); //clear chat input
        createMessage("user", message.toEmoticon());
        console.log(message);
        setTimeout(function () {
          botRespondTo(message);
        }, 1000);
  		}
  	}
  });

  // Function to write user or bot messages
  function createMessage(from, message) {
    if (from === "user") {
      $('.conversation').append(
        $('<li/>', {'class': 'userResponse'}).append(
          $('<div/>', {'class': 'messages'}).append(
            $('<p/>', {text: message})
          )
        )
        .append(
          $('<div/>', {'class': 'triangle'})
        )
      );
    } else if (from === "bot") {
      $('.conversation').append(
        $('<li/>', {'class': 'botResponse'}).append(
          $('<div/>', {'class': 'messages'}).append(
            $('<p/>', {text: message})
          )
        )
        .append(
          $('<div/>', {'class': 'triangle'})
        )
      );
    }
  }

  // Function to get bot to reply to messages
  function botRespondTo(message) {
    var response = "I haven't been taught that yet, but if you are looking for a full-stack developer, contact me at dinh.v.le@gmail.com. You can also look at some of the stuff I did at www.dinhvle.com.";
    message = message.toLowerCase();

    if(message.match('(hi|hello|hey|hola|howdy)(\\s|!|\\.|$)'))
			response = "Hi, welcome to my page";

    if(message.match('what[^ ]* your name') || message.match('name') || message.match('call you'))
      response = "You can call me Dinh";

		if(message.match('what[^ ]* up') || message.match('sup') || message.match('how are you'))
			response = "I'm doing well, how are you?";

    if(message.match('what[^ ]* your contact') || message.match('contact'))
      response = "You can contact me at dinh.v.le@gmail.com";

    if(message.match('how[^ ]* the weather') || message.match('weather'))
      response = "I don't know, I've been stuck inside!";

    if(message.match('what[^ ]* do for fun') || message.match('what[^ ]* your hobbies'))
      response = "I like biking, eating and learning new things";

    if(message.match('what[^ ]* do think about galvanize') || message.match('galvanize'))
      response = "Galvanize is pretty cool I guess";

    if(message.match('how[^ ]* galvanize'))
      response = "it's rough, I cry myself to sleep every night";

    if(message.match('what[^ ]* are you learning') || message.match('teaching'))
      response = "A lil bit of everything, but mostly front-end stuff right now";

    if(message.match('really?'))
      response = "Yes";

    if(message.match('cool') || message.match('awesome'))
      response = "I know right?";

    if(message.match('what[^ ]* are you doing') || message.match('doing now'))
      response = "I'm currently in a web-dev program at Galvanize";

    if(message.match('what[^ ]* your goal') || message.match('goals') || message.match('do later'))
      response = "I want to be the very best, like no one ever was";

    if(message.match(message.match('do you') && message.match('galvanize') && message.match('enjoy')))
      response = "been pretty fun, I like learning all the new things there :)";

    if(message.match('what[^ ]* do you listen to') || message.match('music'))
      response = "I like alternative, indie-stuff but pretty much listen to everything";

    if(message.match('what[^ ]* do think about javascript') || message.match('javascript'))
      response = "It's decent I guess, but sometimes I don't understand why it does something";

    if(message.match('what[^ ]* do think about bootstrap') || message.match('bootstrap') || message.match('[^]*like bootstrap'))
      response = "It's a good tool, but could easier be over-used";

    if(message.match('(shit|piss|fuck|cunt|cocksucker|motherfucker)(\\s|!|\\.|$)'))
			response = "Eww , don't say that ╯°□°）╯︵ ┻━┻";

    if(message.match('(happy|smile)(\\s|!|\\.|$)'))
			response = "smile";

    if(message.match('(cry|sad)(\\s|!|\\.|$)'))
      response = "cry";

    if(message.match('(bye|goodbye|cya|chao)(\\s|!|\\.|$)'))
			response = "See you later";

    console.log(response);
    createMessage("bot", response.toEmoticon());
  };

  // Replace keyword with emoticon
  String.prototype.toEmoticon = function () {
    return this.replace(/happy|smile|sad/gi ,
      function myFunction(x) {
        if ( x === "happy" || x === "smile") {
          return ":)";
        }

        if ( x === "sad" ) {
          return ":(";
        }
      }
    );
  };

  // Setting up cleverbot
  // function botRespondTo(message) {
  //   var bot = new cleverbot("4Pxm8fgmOt9TIFOg", "B9snhX07iLDEBhvtEI3uYyxkjmy1jFav"); // Set up keys
  //   bot.setNick("uxuibottest"); // Set a nickname
  //
  //   bot.create(function (err, uxuibottest) { // Initialize Cleverbot
  //
  //   	bot.ask(message, function (err, cleverbotResponse) {
  //       console.log(cleverbotResponse);
  //       createMessage("bot", cleverbotResponse);
  //   	});
  //   });
  //
  // }

});
