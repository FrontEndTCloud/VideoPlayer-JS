/**
 * @class ButtonDecorator
 * @extends Decorator
 * @package Components/Decorators/BaseDecorators
 */

class ButtonDecorator extends Decorator {

  /**
   * @var {String}
   */
  _borderType;

  /**
   * @var {String}
   */
  _borderColor;

  /**
   * @var {String}
   */
  _borderWidth;

  /**
   * @var {String}
   */
  _borderRadius;

  /**
   * @var {String}
   */
  _width;

  /**
   * @var {String}
   */
  _height;

  /**
   * @var {String}
   */
  _backgroundColor;

  /**
   * @var {String}
   */
  _color;

  /**
   * @var {String}
   */
  _fontSize;

  /**
   * @var {String}
   */
  _fontWeight;

  /**
   * @returns {String}
   */
  get borderType() {
    return this._borderType;
  }

  /**
   * @param {String} borderType 
   */
  set borderType(borderType) {
    this._borderType = borderType;
  }

  /**
   * @returns {String}
   */
  get borderColor() {
    return this._borderColor;
  }

  /**
   * @param {String} borderColor 
   */
  set borderColor(borderColor) {
    this._borderColor = borderColor;
  }

  /**
   * @returns {String}
   */
  get borderWidth() {
    return this._borderWidth;
  }

  /**
   * @param {String} borderWidth 
   */
  set borderWidth(borderWidth) {
    this._borderWidth = borderWidth;
  }

  /**
   * @returns {String}
   */
  get borderRadius() {
    return this._borderRadius;
  }

  /**
   * @param {String} borderRadius 
   */
  set borderRadius(borderRadius) {
    this._borderRadius = borderRadius;
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
   * @returns {String}
   */
  get backgroundColor() {
    return this._backgroundColor;
  }

  /**
   * @param {String} backgroundColor 
   */
  set backgroundColor(backgroundColor) {
    this._backgroundColor = backgroundColor;
  }

  /**
   * @returns {String}
   */
  get color() {
    return this.color;
  }

  /**
   * @param {String} color 
   */
  set color(color) {
    this._color = color;
  }

  /**
   * @returns {String}
   */
  get fontSize() {
    return this._fontSize;
  }

  /**
   * @param {String} fontSize 
   */
  set fontSize(fontSize) {
    this._fontSize = fontSize;
  }

  /**
   * @returns {String}
   */
  get fontWeight() {
    return this._fontWeight;
  }

  /**
   * @param {String} fontWeight 
   */
  set fontWeight(fontWeight) {
    this._fontWeight = fontWeight;
  }

  /**
   * @param {Object} object 
   * @returns {Decorator}
   */
  fromObject(object = {}) {
    if( object.borderType )
      this._borderType = object.borderType;

    if( object.borderColor )
      this._borderColor = object.borderColor;

    if( object.borderWidth )
      this._borderWidth = object.borderWidth;

    if( object.borderRadius )
      this._borderRadius = object.borderRadius;

    if( object.width )
      this._width = object.width;

    if( object.height )
      this._height = object.height;

    if( object.backgroundColor )
      this._backgroundColor = object.backgroundColor;

    if( object.color )
      this._color = object.color;

    if( object.fontSize )
      this._fontSize = object.fontSize;

    if( object.fontWeight )
      this._fontWeight = object.fontWeight;

    return this;
  }

}