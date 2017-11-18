// I can add, subtract, multiply and divide two numbers. DONE
// I can clear the input field with a clear button. DONE

// I can keep chaining mathematical operations together
//  until I hit the equal button, and the calculator will
//  tell me the correct output. DONE

$(document).ready(function() {

  var entry = "";
  var count = 0;

  $('button').click(function(){
    if ($(this).hasClass("solve")) {
      entry = eval(entry);
      $("#display").text(entry);
    }
    else if ($(this).hasClass("operation")) {
      count++;
      if (count === 2) {
        entry = eval(entry);
        entry += $(this).val();
        $("#display").text(entry);
        count = 0;
      }
      else {
        entry += $(this).val();
        $("#display").text(entry);
      }
    }
    else if ($(this).val() === "clear") {
      entry = "";
      count = 0;
      $("#display").text("0");
    }
    else if ($(this).hasClass("num")) {
      entry += $(this).val();
      $("#display").text(entry);
    }

  })
});
