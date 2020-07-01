/**
 * @class BaseModel
 * @package Models
 */

class BaseModel {

  /**
   * @var {String}
   */
  _id;

  /**
   * @returns {String}
   */
  get id() {
    return this._id;
  }

  /**
   * @param {String} id 
   */
  set id(id) {
    this._id = id;
  }

  /**
   * @param {Object} optionsObject 
   * @returns {BaseModel}
   */
  fromObject(optionsObject = {}) {

    if(optionsObject.id)
        this.id = String(optionsObject.id);

    return this;
  }

}