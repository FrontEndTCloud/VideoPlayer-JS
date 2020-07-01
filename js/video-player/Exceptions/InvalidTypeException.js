/**
 * @class InvalidTypeException
 * @extends VPException
 * @package Exceptions
 */

class InvalidTypeException extends VPException {

  /**
   * @var {String}
   */
  _name = 'InvalidTypeException';

  constructor(message = '', name = false) {
    super(message, InvalidTypeException.name);
    this.message = 'VideoPlayer Exception, ' + this.name + ': ' + message;

    return this;
  }

}