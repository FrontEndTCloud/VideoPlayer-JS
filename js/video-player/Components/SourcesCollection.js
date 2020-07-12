/**
 * @class SourcesCollection
 * @extends Component
 * @package Components
 */

class SourcesCollection extends Component {

  /**
   * @var SourcesCollectionModel
   */
  _collection;

  /**
   * @returns SourcesCollectionModel
   */
  get collection() {
    return this._collection;
  }

  /**
   * @param SourcesCollectionModel collection
   */
  set collection(collection) {
    this._collection = new SourcesCollectionModel(collection);
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
        }
      }),
      
    ];
  }

}