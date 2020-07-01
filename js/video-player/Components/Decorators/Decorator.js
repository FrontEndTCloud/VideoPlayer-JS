/**
 * @class Decorator
 * @package Components/Decorators
 */

class Decorator {

  /**
   * @var {String}
   */
  _className;

  get className() {
    return this._className;
  }

  set className(className) {
    this._className = className;
  }

  /**
   * @param {Object} object 
   * @returns {Decorator}
   */
  fromObject(object = {}) {
    if( object.className )
      this.className = object.className;

    return this;
  }

}