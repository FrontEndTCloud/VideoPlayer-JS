/**
 * @class PlayButton
 * @extends Component
 * @package Components
 */

class PlayButton extends Component {

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

          videoPlayer.play()
        }
      }),
      
  ];
  }

}