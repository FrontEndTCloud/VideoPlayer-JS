# JavaScritp flexible video player

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/YudovAlexei/VideoPlayer-JS)

# Options
##### Boolean: #####
- muted
- autoload
- controls
- loop
- preload

##### String: #####
- poster
- video-src

##### Integer: #####
- width
- height


#### Example ####

```sh
var options = {
    muted: true,
    autoload: false,
    controls: false,
    loop: true,
    preload: true,
    poster: 'app/img/poster.png',
    video-src: 'app/videos/video.mp4',
    width: 360,
    height: 240,
};

var videoPlayerContainer = document.getElementById('myVideoId'),
        videoPlayer = new VideoPlayer( videoPlayerContainer, options );
```
