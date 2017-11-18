$(document).ready(function() {
  var twitchAPI = "https://wind-bow.glitch.me/twitch-api/";
  var twitchUsers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin"];

  twitchUsers.forEach(function(userid) {
    // <h4 id="user">user</h4>
    // <h5 id="stream">stream</h5>
    $.getJSON(twitchAPI + "streams/" + userid, function(json) {
      if(json.stream == null) {
        $.getJSON(twitchAPI + "channels/" + userid, function(json) {
          if(json.status == 404) {
            var html = "";
            html += '<div class="channel col-md-4 container">';
            html += '<h4 class="user">' + userid + " does not exist" + '</h4>';
            html += '<h5 class="stream">' + "Offline" + '</h5>';
            html += '</div>';
            console.log(json);
            $('#channels').append(html);
          }
          else {
            var html = "";
            html += '<div class="channel col-md-4 container">';
            html += '<img src="' + json.logo + '" class="logo img-circle img-responsive" alt="Channel Logo">'
            html += '<h4 class="user"> <a href="' + json.url + '">' + json.display_name + '</a></h4>';
            html += '<h5 class="stream">' + "Offline" + '</h5>';
            html += '</div>';
            console.log(json);
            $('#channels').append(html);
          }
        });
      }
      else {
        var html = "";
        html += '<div class="channel col-md-4 container">';
        html += '<img src="' + json.stream.channel.logo + '" class="logo img-circle img-responsive" alt="Channel Logo">'
        html += '<h4 class="user"> <a href="' + json.stream.channel.url + '">' + json.stream.channel.display_name + '</a></h4>';
        html += '<h5 class="stream">' + json.stream.channel.status + '</h5>';
        html += '</div>';
        console.log(json);
        $('#channels').append(html);
      }
    });
  });




});

//  I can see whether Free Code Camp is currently streaming on Twitch.tv. DONE

//  I can click the status output and be sent directly to the Free Code Camp's Twitch.tv channel. DONE

//  if a Twitch user is currently streaming, I can see additional details about what they are streaming. DONE

//  I will see a placeholder notification if a streamer has closed their Twitch account DONE
// (or the account never existed). You can verify this works by adding brunofin and comster404 to your array of Twitch streamers.
