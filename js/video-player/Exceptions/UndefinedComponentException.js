/**
 * @class InvalidTypeException
 * @extends VPException
 * @package Exceptions
 */

class UndefinedComponentException extends VPException {

  /**
   * @var {String}
   */
  _name = 'UndefinedComponentException';

  constructor(message = '', name = false) {
    super(message, InvalidTypeException.name);
    this.message = 'VideoPlayer Exception, ' + this.name + ': ' + message;

    return this;
  }

}