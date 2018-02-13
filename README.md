
# Tablo Simple Client

Simple Tablo client proof of concept to watch TV on an iPad on a treadmill with easy access to channel change buttons.

NOTE: THIS VERSION ONLY WORKS ON APPLE WEBKIT BROWSERS, SAFARI AND IOS
      DUE TO THE USE OF M3U8 PLAYLISTS DELIVERED BY TABLO

## Installing

Set Tablo IP address in js/tablo.js

````
    var Tablo = "192.168.0.157";
````

Start a webserver:
```
[MacMini]$ python -m SimpleHTTPServer 8000

```

## YouTube Example:

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/NgzoxGgqtv4/0.jpg)](https://www.youtube.com/watch?v=NgzoxGgqtv4)


## Packages used

Kudos and thanks to each of the following that were used to build this app:

* [Tablo Plex Channel](https://github.com/plexinc-plugins/Tablo.bundle)
* [jQuery](http://jquery.com/download/)

**NOTE:  All trademarks are of their respective owners.**  

**This application is in NO WAY affiliated or endorsed with or by any product!**

## Authors

* **[James Cuff](http://twitter.com/jamesdotcuff)**
* **[Michele Clamp](http://twitter.com/micheleclamp)**

## TODO

* Add channel change buttons
* Grab thumbnails and "now playing guide data"
* Probably 1,000 other ideas... :-)
