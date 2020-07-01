/**
 * @class EventModel
 * @package Models
 */

class EventModel {

  /**
   * @var {String}
   */
  _eventName;

  /**
   * @var {DOMObject}
   */
  _eventTarget;

  /**
   * @var {Function}
   */
  _eventCallback;

  /**
   * @returns {String}
   */
  get eventName() {
    return this._eventName;
  }

  /**
   * @param {String} eventName 
   */
  set eventName(eventName) {
    this._eventName = eventName;
  }

  /**
   * @var {DOMObject}
   */
  get eventTarget() {
    return this._eventTarget;
  }

  /**
   * @param {DOMObject} eventTarget 
   */
  set eventTarget(eventTarget) {
    this._eventTarget = eventTarget;
  }

  /**
   * @var {Function}
   */
  get eventCallback() {
    return this._eventCallback;
  }

  /**
   * @param {Function} eventCallback 
   */
  set eventCallback(eventCallback) {
    this._eventCallback = eventCallback;
  }

  /**
   * @param {Object} object 
   * @returns {EventModel}
   */
  fromObject(object = {}) {
    if(object.eventName)
      this.eventName = object.eventName;

    if(object.eventTarget)
      this.eventTarget = object.eventTarget;

    if(object.eventCallback)
      this.eventCallback = object.eventCallback;

    return this;
  }
}