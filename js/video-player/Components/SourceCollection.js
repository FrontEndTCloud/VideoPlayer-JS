/**
 * @class SourceCollection
 * @extends Component
 * @package Components
 */

class SourceCollection extends Component {

  /**
   * @var {Array<SourceModel>}
   */
  _collection;

  /**
   * @returns {Array<SourceModel>}
   */
  get collection() {
    return this._collection;
  }

  /**
   * @param {Array} collection
   */
  set collection(collection) {
    this._collection = this.buildModelsCollection(collection);
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

  /**
   * @param {Array} array
   */
  buildModelsCollection(array) {
    for(let i = 0; i < array.length; i++) {
      console.log(array[i])

      array[i] = (new SourceModel()).fromObject(array[i]);
    }

    return array;
  }

}