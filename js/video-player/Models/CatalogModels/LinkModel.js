/**
 * @class LinkModel
 * @package Models/CatalogModels
 */

class LinkModel {

  /**
   * @var String
   */
  _link;

  /**
   * @var String
   */
  _format;

  /**
   * @returns String
   */
  get link() {
    return this._link;
  }

  /**
   * @param String
   */
  set link(link) {
    this._link = link;
  }

  /**
   * @returns String
   */
  get format() {
    return this._format;
  }

  /**
   * @param String
   */
  set format(format) {
    this._format = format;
  }

  /**
   * @param {Object} object 
   * @return LinkModel
   */
  fromObject(object = {}) {
    if(object.link)
      this.link = object.link;

    if(object.format)
      this.format = object.format;

    return this;
  }

}