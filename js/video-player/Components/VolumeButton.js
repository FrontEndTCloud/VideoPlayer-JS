/**
 * @class VolumeButton
 * @extends Component
 * @package Components
 */

class VolumeButton extends Component {

  /**
   * @var {Integer}
   */
  MAX = 1;

  /**
   * @var {Integer}
   */
  MIN = 0;

  /**
   * @var {Number}
   */
  _step = 0.1;

  /**
   * @var {Number}
   */
  _volume = 1;

  /**
   * @returns {Number}
   */
  get step() {
    return this._step;
  }

  /**
   * @param {Number}
   */
  set step(step) {
    this._step = step;
  }

  /**
   * @returns {Number}
   */
  get volume() {
    return this._volume;
  }

  /**
   * @param {Number} volume
   */
  set volume(volume) {
    this._volume = volume;
    this.videoPlayer.volume = volume;
  }

  /**
   * @param {DOMObject} videoPlayer 
   */
  constructor(videoPlayer) {
    super();

    let that = this;

    this.events = [

      (new EventModel()).fromObject({
        eventName: 'input',
        eventCallback: function(e) {
          /**
           * In this code block you can use "this" for
           * DOMElement which you bind with event.
           */
          e.target.setAttribute('value', that.volume);
          that.volume = e.target.value;
        }
      }),
      (new EventModel()).fromObject({
        eventTarget: window,
        eventName: 'DOMContentLoaded',
        eventCallback: function(e) {
          /**
           * In this code block you can use "this" for
           * DOMElement which you bind with event.
           */
          let volumeButton = document.getElementById(that.id);

          volumeButton.setAttribute('max', that.MAX);
          volumeButton.setAttribute('min', that.MIN);
          volumeButton.setAttribute('step', that.step);
          volumeButton.setAttribute('value', that.volume);
        }
      }),

    ];
  }

}