/**
 * @class VideoPlayerModel
 * @extends BaseModel
 * @package Models
 */

class VideoPlayerModel extends BaseModel {

  /**
   * @var {Boolean}
   */
  _autoplay;

  /**
   * @var {Boolean}
   */
  _preload;

  /**
   * @var {String}
   */
  _width;

  /**
   * @var {String}
   */
  _height;

  /**
   * @var {Boolean}
   */
  _loop;

  /**
   * @returns {Boolean}
   */
  get autoplay() {
    return this._autoplay;
  }

  /**
   * @param {Boolean} autoplay 
   */
  set autoplay(autoplay) {
    this._autoplay = autoplay;
  }

  /**
   * @returns {Boolean}
   */
  get preload() {
    return this._preload;
  }

  /**
   * @param {Boolean} preload 
   */
  set preload(preload) {
    this._preload = preload;
  }

  /**
   * @returns {String}
   */
  get width() {
    return this._width;
  }

  /**
   * @param {String} width 
   */
  set width(width) {
    this._width = width;
  }

  /**
   * @returns {String}
   */
  get height() {
    return this._height;
  }

  /**
   * @param {String} height 
   */
  set height(height) {
    this._height = height;
  }

  /**
   * @returns {Boolean}
   */
  get loop() {
    return this._loop;
  }

  /**
   * @param {Boolean} loop 
   */
  set loop(loop) {
    this._loop = loop;
  }

  /**
   * @param {Object} optionsObject 
   * @returns {VideoPlayerModel}
   */
  fromObject(optionsObject = {}) {

    var model = {};

    if(optionsObject.autoplay)
        model.autoplay = Boolean(optionsObject.autoplay);
        /** @link https://developers.google.com/web/updates/2017/09/autoplay-policy-changes */
        model.muted = Boolean(optionsObject.autoplay);

    if(optionsObject.preload)
        model.preload = Boolean(optionsObject.preload);

    if(optionsObject.width)
        model.width = String(optionsObject.width);
    
    if(optionsObject.height)
        model.width = String(optionsObject.height);

    if(optionsObject.loop)
        model.loop = Boolean(optionsObject.loop);

    return model;
  }
}