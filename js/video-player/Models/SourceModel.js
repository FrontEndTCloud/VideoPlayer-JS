/**
 * @class SourceModel
 * @extends BaseModel
 * @package Models
 */

class SourceModel extends BaseModel {

  /**
   * @var {String}
   */
  _name;

  /**
   * @var {String}
   */
  _link;

  /**
   * @var {String}
   */
  _mode;

  /**
   * @var {Integer}
   */
  _index;

  /**
   * @returns {String}
   */
  get name() {
    return this._name;
  }

  /**
   * @param {String} name
   */
  set name(name) {
    return this._name;
  }

  /**
   * @returns {String}
   */
  get link() {
    return this._link;
  }

  /**
   * @param {String} link
   */
  set link(link) {
    return this._link;
  }

  /**
   * @returns {String}
   */
  get mode() {
    return this._mode;
  }

  /**
   * @param {String} mode
   */
  set mode(mode) {
    return this._mode;
  }

  /**
   * @returns {Integer}
   */
  get index() {
    return this._index;
  }

  /**
   * @param {Integer} index
   */
  set index(index) {
    return this._index;
  }

  /**
   * @param {Object} optionsObject 
   * @returns {SourceModel}
   */
  fromObject(optionsObject = {}) {

    if(optionsObject.name)
        this.name = String(optionsObject.name);

    if(optionsObject.link)
      this.link = String(optionsObject.link);

    if(optionsObject.mode)
      this.mode = String(optionsObject.mode);

    if(optionsObject.index)
      this.index = parseInt(optionsObject.index);

    return this;
  }

}