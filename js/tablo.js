$(function(){

    // Set IP of Tablo Device here, this is the only config.

    var Tablo = "192.168.0.157";
    
    $.get("http://" + Tablo + ":8885/guide/channels", function(channels = JSON.parse(data)){
     var index; 
     for (index = 0; index < channels.length; ++index) {
         ThisChannel = channels[index].split("/");
         tmpurl = "http://192.168.0.157:8885/guide/channels/" + ThisChannel[3]; 
         watchurl = "http://" + Tablo + ":8885/guide/channels/" + ThisChannel[3] + "/watch";
         watchstr = '<a href="' + watchurl + '">watch</a>';
         callsigns = {};
         getCallSign(tmpurl, ThisChannel[3], Tablo);
     }
  });
});

function getVideoURL(chanid,callsign,Tablo){
   tmpurl = "http://" + Tablo + ":8885/guide/channels/" + chanid + "/watch";
   document.getElementById("status").innerHTML =  "Tuning to... " + callsign + " please wait...";
   console.log("Tuning to... " + callsign + "please wait...");
   $.post(tmpurl,function(watch = JSON.parse(data)) {
      console.log(watch.playlist_url);
      document.getElementById("Video1").innerHTML = "\n\nWatch URL\n" + watch.playlist_url + "\n\n";
      document.getElementById("Video1").innerHTML = '<video height="400" width="720" playsinline autoplay controls src="' + watch.playlist_url + '" type="application/x-mpegurl" class="media-document mac video"></video>';
      document.getElementById("status").innerHTML =  "Now playing " + callsign;
    });
}

function getCallSign(tmpurl,chanid,Tablo){
  $.get(tmpurl,function(data) {
     result = data.channel.major + "."
       + data.channel.minor
       + " " + data.channel.resolution
       + "\n";
     callsigns[data.channel.call_sign] = result;
     buttonid = "channel_" + data.object_id;
     console.log(buttonid);
     $('#channel_table tr:last').after("<tr><td><input id='" + buttonid + "' class='button' type='button' value='" + data.channel.call_sign +  "'/></td></tr>");
     $('#'+buttonid).on('click',function() {
          getVideoURL(chanid,data.channel.call_sign,Tablo);
     });
  });
}

