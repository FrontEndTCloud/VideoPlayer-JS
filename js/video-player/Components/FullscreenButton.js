/**
 * @class FullscreenButton
 * @extends Component
 * @package Components
 */

class FullscreenButton extends Component {

  /**
   * @var {Boolean}
   */
  _fullscreen;

  /**
   * @returns {Boolean}
   */
  get fullscreen() {
    return this._fullscreen;
  }

  /**
   * @param {Boolean}
   */
  set fullscreen(fullscreen) {
    this._fullscreen = Boolean(fullscreen);
  }

  /**
   * @param {DOMObject} videoPlayer 
   */
  constructor(videoPlayer) {
    super();
    var that = this;

    this.events = [

      (new EventModel()).fromObject({
        eventName: 'click',
        eventCallback: function() {
          /**
           * In this code block you can use "this" for
           * DOMElement which you bind with event.
           */
  
          let isFullscreen,
              videoPlayerContainer = document.querySelector('.' + VideoPlayerHTMLHelper.MAIN_CONTAINER_CLASS);
  
          isFullscreen = (this.getAttribute('data-fullscreen') == 'true') ? true : false;
  
          if(isFullscreen) {
            that.closeFullscreen(this, videoPlayerContainer);
          } else {
            that.openFullscreen(this, videoPlayerContainer);
          }
  
          this.setAttribute('data-fullscreen', that.fullscreen);
  
        }
      }),

    ];
  }

  /**
   * @param {DOMObject} fullscreenButtonElement 
   * @param {DOMObject} videoPlayerContainer 
   */
  openFullscreen(fullscreenButtonElement, videoPlayerContainer) {
    let isFullscreen = false;

    if (videoPlayerContainer.requestFullscreen) {
      videoPlayerContainer.requestFullscreen();
      isFullscreen = true;
    }
    
    if (videoPlayerContainer.mozRequestFullScreen) { /* Firefox */
      videoPlayerContainer.mozRequestFullScreen();
      isFullscreen = true;
    }
    
    if (videoPlayerContainer.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      videoPlayerContainer.webkitRequestFullscreen();
      isFullscreen = true;
    }
    
    if (videoPlayerContainer.msRequestFullscreen) { /* IE/Edge */
      videoPlayerContainer.msRequestFullscreen();
      isFullscreen = true;
    }

    this.fullscreen = isFullscreen;
  }

  /**
   * @param {DOMObject} fullscreenButtonElement 
   * @param {DOMObject} videoPlayerContainer 
   */
  closeFullscreen(fullscreenButtonElement, videoPlayerContainer) {
    let isFullscreen = true;

    if (document.exitFullscreen) {
      document.exitFullscreen();
      isFullscreen = false;
    }
    
    if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
      isFullscreen = false;
    }
    
    if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
      isFullscreen = false;
    }
    
    if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
      isFullscreen = false;
    }

    this.fullscreen = isFullscreen;
  }

}