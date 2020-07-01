/**
 * Main component class
 * @class Component
 * @package Components
 */

class Component {

  /**
   * @var {DOMObject}
   */
  _videoPlayer;

  /**
   * @var {String}
   */
  _id;

  /**
   * @var {EventModel}
   */
  _events;

  /**
   * @returns {DOMObject}
   */
  get videoPlayer() {
    return this._videoPlayer;
  }

  /**
   * @param {DOMObject} videoPlayer 
   */
  set videoPlayer(videoPlayer) {
    this._videoPlayer = videoPlayer;
  }

  /**
   * @returns {String}
   */
  get id() {
    return this._id;
  }

  /**
   * @param {String} id 
   */
  set id(id) {
    this._id = id;
  }

  /**
   * @returns {EventModel}
   */
  get event() {
    return this._event;
  }

  /**
   * @param {EventModel} event
   */
  set event(event) {
    this._event = event;
  }

  /**
   * @param {DOMObject} videoPlayer 
   * @param {Integer} id 
   */
  constructor(videoPlayer, id) {
    this.videoPlayer = videoPlayer;
    this.id = id;
  }

  /**
   * @param {DOMObject} eventTarget 
   * @param {String} eventName 
   * @param {Function} eventCallback 
   */
  setEvent( eventTarget, eventName, eventCallback ) {    
    if( typeof eventCallback === 'function' ) {
      if(eventTarget) {
        eventTarget.addEventListener(eventName, eventCallback);
      }

      if(document.getElementById(this.id)) {
        document.getElementById(this.id).addEventListener(eventName, eventCallback);
      }
    } else {
      throw new InvalidTypeException('Invalid type of component event, expected "function" type.');
    }
  }

}