$(document).ready(function() {
  $("#getQuote").on("click", getQuote);
  $("#tweetQuote").on("click", tweetQuote);
});

// Get a new quote from forismatic
function getQuote() { 
  $("#getQuote").addClass("disabled"); 
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&key=123456&lang=en&jsonp=?", function(json) {
    document.getElementById('quote').innerHTML = json.quoteText;
    document.getElementById('author').innerHTML = " -" + json.quoteAuthor;
    $("#getQuote").removeClass("disabled"); 
  });
}

// Tweet quote
function tweetQuote() {
  window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + document.getElementById('quote').textContent + '"' + document.getElementById('author').textContent));
} 
