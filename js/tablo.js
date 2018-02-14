$(function(){

    // Set IP of Tablo Device here, this is the only config.

    var Tablo = "192.168.0.157";
    
    $.get("http://" + Tablo + ":8885/guide/channels", function(channels = JSON.parse(data)){
     var index; 
     for (index = 0; index < channels.length; ++index) {
         ThisChannel = channels[index].split("/");
         tmpurl = "http://" + Tablo + ":8885/guide/channels/" + ThisChannel[3]; 
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

   $.post(tmpurl,function(watch = JSON.parse(data)) {

   if(Hls.isSupported()) {
      var video = document.getElementById('video');
      var hls = new Hls();
      hls.loadSource(watch.playlist_url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED,function() {
        video.play();
      });
   }

   else if (video.canPlayType('application/vnd.apple.mpegurl')) {
     video.src = watch.playlist_url;
     video.addEventListener('canplay',function() {
       video.play();
     });
   }
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

     $('#channel_table tr:last').after("<tr><td><input id='" + buttonid 
       + "' class='button' type='button' value='" + data.channel.call_sign 
       +  "'/></td></tr>");

     $('#'+buttonid).on('click',function() {
          getVideoURL(chanid,data.channel.call_sign,Tablo);
     });
  });
}

