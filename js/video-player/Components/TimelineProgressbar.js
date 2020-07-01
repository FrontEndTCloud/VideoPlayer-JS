/**
 * @class TimelineProgressbar
 * @extends Component
 * @package Components
 */

class TimelineProgressbar extends Component {

  /**
   * @var {Integer}
   */
  MAX = 100;

  /**
   * @var {Integer}
   */
  MIN = 0;

  /**
   * @var {Number}
   */
  _currentTime = 0;

  /**
   * @var {Number}
   */
  _step = 0.5;

  /**
   * @var {Number}
   */
  _duration;

  /**
   * @var {Boolean}
   */
  _ended;

  /**
   * @returns {Number}
   */
  get currentTime() {
    return this._currentTime;
  }

  /**
   * @param {Number} currentTime
   */
  set currentTime(currentTime) {
    this._currentTime = currentTime;
    this.videoPlayer.currentTime = currentTime;
  }

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
  get duration() {
    return this._duration;
  }

  /**
   * @param {Number}
   */
  set duration(duration) {
    this._duration = duration;
  }

  /**
   * @returns {Boolean}
   */
  get ended() {
    return this.videoPlayer.ended;
  }

  /**
   * @param {DOMObject} videoPlayer 
   */
  constructor(videoPlayer) {
    super();

    let that = this;

    this.duration = videoPlayer.duration;
    this.events = [

      (new EventModel()).fromObject({
        eventName: 'input',
        eventCallback: function(e) {
          /**
           * In this code block you can use "this" for
           * DOMElement which you bind with event.
           */
          e.target.setAttribute('value', that.currentTime);
          that.currentTime = e.target.value;
        }
      }),
      (new EventModel()).fromObject({
        eventTarget: videoPlayer,
        eventName: 'timeupdate',
        eventCallback: function(e) {
          /**
           * In this code block you can use "this" for
           * DOMElement which you bind with event.
           */
          let timeLineElement = document.getElementById(that.id);

          timeLineElement.value = e.target.currentTime;
        }
      }),
      (new EventModel()).fromObject({
        eventTarget: videoPlayer,
        eventName: 'loadedmetadata',
        eventCallback: function(e) {
          /**
           * In this code block you can use "this" for
           * DOMElement which you bind with event.
           */
          let timeLineElement = document.getElementById(that.id);
          that.duration = this.duration;

          timeLineElement.setAttribute('max', that.duration.toFixed(0));
          timeLineElement.setAttribute('min', that.MIN);
          timeLineElement.setAttribute('step', that.step);
          timeLineElement.setAttribute('value', that.currentTime);
        }
      }),

    ];
  }

}