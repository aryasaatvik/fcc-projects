$(document).ready(function() {
  $("#getSearch").on("click", getSearch);
});

//  I can search Wikipedia entries in a search box and see the resulting Wikipedia entries. DONE
// https://en.wikipedia.org/wiki/Special:Random
//  I can click a button to see a random Wikipedia entry. DONE
// https://www.mediawiki.org/wiki/API:Main_page

// API Endpoint https://en.wikipedia.org/w/api.php
var search = "Albert Einstein";
var wikipediaAPI = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + encodeURIComponent(search) + "&format=json&callback=?";
// var wikipediaAPI = "../wikipedia.json"
var wikipedia = "https://en.wikipedia.org/wiki/"

function getSearch() {
  $("#getSearch").addClass("disabled"); 
  $("#results").empty();
  search = $('#searchField').val();
  wikipediaAPI = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + encodeURIComponent(search) + "&format=json&callback=?";


 $.getJSON(wikipediaAPI, function(json) {
   json.query.search.forEach(function(article) {
      var html = "";
       html += '<div class="searchResult">';
       html += '<div class="container">';
       html += '<div class="row">';
       html += '<h4 class="title">' + article.title + '</h4>';
       html += '<p class="snippet">' + article.snippet + '</p>';
       html += '<a class="wiki" href="' + wikipedia + article.title.split(" ").join("_") + '">Read Wiki</a>';
       html += '</div>';
       html += '</div>';
       html += '</div>';
       console.log(html);
       $('#results').append(html);

   });
   $("#getSearch").removeClass("disabled"); 
 });
}
