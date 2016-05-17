$(function() {
  // Declaring variables
  var $chatInput = $('#chat');
  var isTyping;

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















});
