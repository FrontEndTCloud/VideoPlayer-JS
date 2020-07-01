/**
 * @class MuteButton
 * @extends Component
 * @package Components
 */

class MuteButton extends Component {

  /**
   * @var {Boolean}
   */
  _muted;

  /**
   * @returns {Boolean}
   */
  get muted() {
    return this._muted;
  }

  /**
   * @param {Boolean} muted
   */
  set muted(muted) {
    this._muted = muted;
  }

  /**
   * @param {DOMObject} videoPlayer 
   */
  constructor(videoPlayer) {
    super();

    this.events = [

      (new EventModel()).fromObject({
        eventName: 'click',
        eventCallback: function() {
          /**
           * In this code block you can use "this" for
           * DOMElement which you bind with event.
           */
  
          videoPlayer.muted = !Boolean(videoPlayer.muted);
        }
      }),

    ];
  }

}