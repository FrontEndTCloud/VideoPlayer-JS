/**
 * @class LinksCollectionModel
 * @package Models/CatalogModels
 */

class LinksCollectionModel {

  _collection;

  /**
   * @return Array<LinkModel>
   */
  get collection() {
    return this._collection;
  }

  /**
   * @param Array
   */
  set collection(collection) {
    this._collection = this.buildFromArray(collection);
  }

  constructor(array) {
    this.collection = array;
  }

  /**
   * @param {Array} array 
   * @return Array<LinkModel>
   */
  buildFromArray(array = []) {
    let res = [];

    array.forEach(catalogObject => {
      res.push(
        (new LinkModel).fromObject(catalogObject)
      );
    });

    console.log(res)

    return res;
  }

}