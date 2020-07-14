/**
 * @class Catalog
 * @extends Component
 * @package Components
 */

class Catalog extends Component {

  /**
   * @var Array<CatalogModel>
   */
  _collection;

  /**
   * @var CatalogCollectionModel
   */
  _collectionModel;

  /**
   * @returns Array<CatalogModel>
   */
  get collection() {
    return this._collection;
  }

  /**
   * @param Array<CatalogModel> collection
   */
  set collection(collection) {
    this._collection = (new CatalogCollectionModel(collection)).collection;
    this._collectionModel = new CatalogCollectionModel(collection);
  }

  /**
   * @returns CatalogCollectionModel
   */
  get collectionModel() {
    return this._collectionModel;
  }

  /**
   * @param DOMObject videoPlayer 
   */
  constructor(videoPlayer) {
    super();

    let that = this;

    this.events = [

      (new EventModel()).fromObject({
        eventName: 'click',
        eventTarget: ComponentsHelper.COMPONENTS_CLASSES_NAMES.catalog.button,
        eventCallback: function(e) {
          /**
           * In this code block you can use "this" for
           * DOMElement which you bind with event.
           */

          let currentItemSlug = e.target.dataset.slug,
              catalogModel;

          if(currentItemSlug) {
            /**
            * removing old source nodes
            */
            videoPlayer.querySelectorAll('source').forEach(source => {
              videoPlayer.removeChild(source);
            });

            /**
             * paste new source nodes
             */
            catalogModel = that.collectionModel.getBy('slug', currentItemSlug);
            catalogModel.video.map(linkModel => {
              /**
               * create and append node
               */
              videoPlayer.appendChild(
                that.createSource(linkModel)
              );
            });

            videoPlayer.load();
          }
        }
      }),
      
    ];
  }

  /**
   * @param LinkModel linkModel 
   * @return DOMElement
   */
  createSource(linkModel) {
    let sourceElement = document.createElement('source');
    sourceElement.setAttribute('src', linkModel.link);
    sourceElement.setAttribute('format', linkModel.format);

    return sourceElement;
  }

}