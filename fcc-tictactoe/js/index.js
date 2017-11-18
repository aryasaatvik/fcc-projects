$(document).ready(function() {
  $('#modal').modal('show');

  // Board
  // 0 1 2
  // 3 4 5
  // 6 7 8

  var boardMoves = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  var player = "";
  var ai = "";
  var playerMoves = [];
  var aiMoves = [];
  var playerWon = false;
  var aiWon = false;
  var winMoves = [
    // horizontal win
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // vertical win
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal win
    [0, 4, 8],
    [2, 4, 6]
  ];

  $("#leftButton").click(function() {
    player = "X";
    ai = "O";
  });

  $("#rightButton").click(function() {
    player = "O";
    ai = "X";
  });

  $(".move").click(function() {
    $(this).text(player);
    $(this).addClass("disabled");
    // get the value and convert to string
    var playerMoveValue = Number($(this).val());
    // push the move if it doesn't exist in the playerMoves array
    if (playerMoves.indexOf(playerMoveValue) === -1) {
      playerMoves.push(playerMoveValue);
    }
    // remove the move from boardMoves array
    if (boardMoves.indexOf(playerMoveValue) > -1) {
      boardMoves.splice(boardMoves.indexOf(playerMoveValue), 1);
    }

    // ai move
    var aiMoveValue = boardMoves[Math.floor((Math.random() * boardMoves.length))];
    $("button[value = " + aiMoveValue + "]").text(ai);
    $("button[value = " + aiMoveValue + "]").addClass("disabled");
    aiMoves.push(aiMoveValue);
    boardMoves.splice(boardMoves.indexOf(aiMoveValue), 1);

    // check if playerMoves has winMoves
    if (playerMoves.length > 2) {
      winMoves.forEach(function(moves) {
        if ((playerMoves.indexOf(moves[0]) > -1) && (playerMoves.indexOf(moves[1]) > -1) && (playerMoves.indexOf(moves[2]) > -1)) {
          playerWon = true;
        }
      });
    }
    // if playerWon display it
    if (playerWon) {
      $(".moves").addClass("disabled");
      $("#title").text("player won");
      setTimeout(function () {
        location.reload();
      }, 3000);
    }

    if (aiMoves.length > 2) {
      winMoves.forEach(function(moves) {
        if ((aiMoves.indexOf(moves[0]) > -1) && (aiMoves.indexOf(moves[1]) > -1) && (aiMoves.indexOf(moves[2]) > -1)) {
          aiWon = true;
        }
      });
    }

    // if aiWon dis
    if (!playerWon && aiWon) {
      $(".moves").addClass("disabled");
      $("#title").text("ai won");
      setTimeout(function () {
        location.reload();
      }, 3000);
    }

    if (!aiWon && !playerWon && boardMoves.length === 0) {
      $("#title").text("tie");

      setTimeout(function () {
        location.reload();
      }, 3000);
    }

    console.log(boardMoves);
    console.log(playerMoves);
  });


});
