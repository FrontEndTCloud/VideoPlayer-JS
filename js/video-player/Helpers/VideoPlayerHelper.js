/**
 * @class VideoPlayerHelper
 * @package Helpers
 */

class VideoPlayerHelper {

  /**
   * @var {string}
   */
  static VIDEO_TAG = 'video';

  /**
   * @var {string}
   */
  static VIDEO_PLAYER_TYPE = 'object';

  /**
   * @var {string}
   */
  static ATTRIBUTE_CONTROLS = 'controls';

  /**
   * @var {string}
   */
  static ATTRIBUTE_MUTE = 'mute';
  
  /**
   * @var {string}
   */
  static ATTRIBUTE_AUTOPLAY = 'autoplay';

  /**
   * @var {string}
   */
  static ATTRIBUTE_LOOP = 'loop';

  /**
   * @var {string}
   */
  static ATTRIBUTE_PRELOAD = 'preload';
  
  /**
   * @var {string}
   */
  static ATTRIBUTE_WIDTH = 'width';

  /**
   * @var {string}
   */
  static ATTRIBUTE_HEIGHT = 'height';

  /**
   * @var {array}
   */
  static ALLOWED_FORMATS = [
    'ogg',
    'theora',
    'mp4',
    'webm',
  ];

  /**
   * @param {String} format
   * @returns {boolean}
   */
  static formatIsAllowed(format = false) {
    return (fileName) 
      ? this.ALLOWED_FORMATS.includes(format) 
      : this.ALLOWED_FORMATS;
  }

}