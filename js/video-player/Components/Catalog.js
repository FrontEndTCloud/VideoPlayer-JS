/**
 * @class Catalog
 * @extends Component
 * @package Components
 */

class Catalog extends Component {

  /**
   * @var CatalogCollectionModel
   */
  _collection;

  /**
   * @returns CatalogCollectionModel
   */
  get collection() {
    return this._collection;
  }

  /**
   * @param CatalogCollectionModel collection
   */
  set collection(collection) {
    this._collection = (new CatalogCollectionModel(collection)).collection;
  }

  /**
   * @param {DOMObject} videoPlayer 
   */
  constructor(videoPlayer) {
    super();

    this.events = [

      (new EventModel()).fromObject({
        eventName: '...',
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