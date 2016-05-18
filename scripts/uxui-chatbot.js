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
        createMessage("user", message);
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
      );
    } else if (from === "bot") {
      $('.conversation').append(
        $('<li/>', {'class': 'botResponse'}).append(
          $('<div/>', {'class': 'messages'}).append(
            $('<p/>', {text: message})
          )
        )
      );
    }
  }

  // Function to get bot to reply to messages
  // function botRespondTo(message) {
  //   var response = "does not compute";
  //   message = message.toLowerCase();
  //
  //   if(message.match('(hi|hello|hey|hola|howdy)(\\s|!|\\.|$)'))
	// 		response = "Hi, welcome to my page";
  //
	// 	if(message.match('what[^ ]* up') || message.match('sup') || message.match('how are you'))
	// 		response = "I'm doing well, how are you?";
  //
  //   if(message.match('what[^ ]* your contact') || message.match('contact'))
  //     response = "You can contact me at dinh.v.le@gmail.com";
  //
  //   if(message.match('how[^ ]* the weather') || message.match('weather'))
  //     response = "I don't know, I've been stuck inside!";
  //
  //   if(message.match('what[^ ]* do for fun') || message.match('what[^ ]* your hobbies'))
  //     response = "I like biking, eating and learning new things";
  //
  //   if(message.match('(bye|goodbye|cya|chao)(\\s|!|\\.|$)'))
	// 		response = "See you later";
  //
  //   createMessage("bot", response);
  //
  // }

  // Setting up cleverbot
  function botRespondTo(message) {
    var bot = new cleverbot("4Pxm8fgmOt9TIFOg", "B9snhX07iLDEBhvtEI3uYyxkjmy1jFav"); // Set up keys
    bot.setNick("uxuibottest"); // Set a nickname

    bot.create(function (err, uxuibottest) { // Initialize Cleverbot

    	bot.ask(message, function (err, cleverbotResponse) {
        console.log(cleverbotResponse);
        createMessage("bot", cleverbotResponse);
    	});
    });

  }

});
