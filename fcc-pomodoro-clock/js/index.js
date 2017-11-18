$(document).ready(function() {
  var sessionLength = 25;
  var timeleft = 0;
  var breakLength = 5;
  var isActive = false;
  var timer;
  var minutes;
  var seconds;

  function updateSessionTimer() {
    if(timeleft > 0){
      timeleft--;
      minutes = Math.floor(timeleft / 60);
      seconds = timeleft - minutes * 60;
      $("#timer").text(minutes + ":" + seconds);
    }
    else {
      clearInterval(timer);
      $("#timerStatus").text("Session Ended");
      timeleft = breakLength * 60;
      $("#timerStatus").text("Break Started");
      timer = setInterval(updateBreakTimer, 1000);
    }
  }
  function updateBreakTimer() {
    if(timeleft > 0){
      timeleft--;
      minutes = Math.floor(timeleft / 60);
      seconds = timeleft - minutes * 60;
      $("#timer").text(minutes + ":" + seconds);

    }
    else {
      $("#timerStatus").text("Break Ended");
      clearInterval(timer);
    }
  }

  $("#increaseSession").click(function() {
    sessionLength++;
    $("#session-length").text(sessionLength);
    console.log("increaseSession");
  });

  $("#decreaseSession").click(function() {
    sessionLength--;
    $("#session-length").text(sessionLength);
    console.log("decreaseSession");
  });

  $("#increaseBreak").click(function() {
    breakLength++;
    $("#break-length").text(breakLength);
    console.log("increaseBreak");
  });

  $("#decreaseBreak").click(function() {
    breakLength--;
    $("#break-length").text(breakLength);
    console.log("decreaseBreak");
  });

  $("#timer").click(function() {
    if (!isActive) {
      isActive = true;
      $("#timer").css('background-color', 'green');
      timeleft = sessionLength * 60;
      $("#timerStatus").text("Session Started");
      timer = setInterval(updateSessionTimer, 1000);
    } else if (isActive) {
      isActive = false;
      $("#timerStatus").text("Session Stopped");
      $("#timer").text(sessionLength + ":" + "00");
      // $("#timer").css('background-color', 'red');
      clearInterval(timer);
    }
  });
});
