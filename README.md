
# Tablo Simple Client

Simple Tablo client proof of concept to watch TV on an iPad on a treadmill with easy access to channel change buttons.  Tested on Windows, OSX and Android with IE, Firefox, Safari and Chrome.  

NOTE: Working on trying to deliver via jquery.mobile on Playstation4 and Samsung TV browsers, not finished, but mostly hopeful...


## Installing


Set Tablo IP address in js/tablo.js

````
    var Tablo = "192.168.0.157";
````

You can just run it directly from a file, just paste this below into your Safari browser if you don't want to set up a python server on your laptop:

```
file:///Users/jcuff/TabloSimpleClient/index.html
```


Or, start a webserver if you need to access via a tablet, (I like using python like this example) then simply point your client at http://localhost:8000/

```
[MacMini]$ python -m SimpleHTTPServer 8000
```


## YouTube Example

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/NgzoxGgqtv4/0.jpg)](https://www.youtube.com/watch?v=NgzoxGgqtv4)


## Packages used

Kudos and thanks to each of the following that were used to build this app:

* [Tablo Plex Channel](https://github.com/plexinc-plugins/Tablo.bundle)
* [jQuery](http://jquery.com/download/)
* [hls.js](https://github.com/video-dev/hls.js/)

Extra kudos to HLS.js folks - their library is fabulous, helped me get running super quickly outside of the Apple WebKit environment.

**NOTE:  All trademarks are of their respective owners.**  

**This application is in NO WAY affiliated or endorsed with or by any product!**

## Authors

* **[James Cuff](http://twitter.com/jamesdotcuff)**
* **[Michele Clamp](http://twitter.com/micheleclamp)**

## TODO

* Add channel change buttons
* Grab thumbnails and "now playing guide data"
* Probably 1,000 other ideas... :-)
