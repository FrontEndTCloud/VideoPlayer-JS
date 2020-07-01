/**
 * @class VPException
 * @package Exceptions
 */

class VPException {

  /**
   * @var {string}
   */
  _message;

  /**
   * @var {String}
   */
  _name = 'VPException';

  /**
   * @returns {String}
   */
  get message() {
    return this._message;
  }

  /**
   * @param {String} message
   */
  set message(message) {
    this._message = message;
  }

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
    this._name = name;
  }

  /**
   * VPException constructor
   * @param {String} message 
   */
  constructor(message = '', name = false) {
    this.name = (name) ? name : this.name;
    this.stack = Error.captureStackTrace(this, this.constructor);
    this.message = 'VideoPlayer Exception, ' + this.name + ': ' + message;

    return this;
  }

}