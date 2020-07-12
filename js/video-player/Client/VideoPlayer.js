/**
 * VideoPlayer - класс для работы с JavaScript плеером
 * @class VideoPlayer
 * @package Client
 */

class VideoPlayer {

  /**
   * @var {Array}
   */
  ALLOWED_ATTRIBUTES = [
    'autoplay',
    'preload',
    'width',
    'height',
    'loop',
  ];

  /**
   * @var {Array}
   */
  DEFAULT_COMPONENTS = [
    'PlayButton',
    'PauseButton',
    'MuteButton',
    'FullscreenButton',
    'VolumeButton',
    'TimelineProgressbar',
    'SourcesCollection',
    'Catalog',
  ];

  /**
   * @var {number}
   */
  _maxIdLength = 999999;

  /**
   * @var {number}
   */
  _minIdLength = 111111;

  /**
   * @var {string}
   */
  _playerPrefix = 'vp-';

  /**
   * @var {DOMObject}
   */
  _containerObject;

  /**
   * @var {DOMObject}
   */
  _videoPlayer;

  /**
   * @var {number}
   */
  _playerId;

  /**
   * @var {Object}
   */
  _options;

  /**
   * @var {ComponentsFabric}
   */
  _components;

  /**
   * @returnss {DOMObject}
   */
  get containerObject() {
    return this._containerObject;
  }

  /**
   * @param {containerObject} containerObject 
   */
  set containerObject(containerObject) {
    this._containerObject = containerObject;
  }

  /**
   * @returnss {DOMObject}
   */
  get videoPlayer() {
    return this._videoPlayer;
  }

  /**
   * @param {DOMObject} videoPlayer 
   */
  set videoPlayer(videoPlayer) {
    this._videoPlayer = videoPlayer;
  }

  /**
   * @returnss {Integer}
   */
  get playerId() {
    return this._playerId;
  }

  /**
   * @returnss {Object}
   */
  get options() {
    return this._options;
  }

  /**
   * @param {Object} options 
   */
  set options(options = {}) {
    this._options = options;
  }

  /**
   * @returnss {Object}
   */
  get components() {
    return this._components;
  }

  /**
   * @param {Object} components 
   */
  set components(components) {
    this._components = components;
  }

  /**
   * VideoPlayer constructor
   * @param {DOMObject} containerObject - DOM object of component
   * @returnss {VideoPlayer} - DOM object of video player
   */
  constructor(containerObject = '', options = false) {
    this._playerId = this.generatePlayerId();
    this.containerObject = containerObject;
    this.options = options;

    this.initializePlayer(containerObject);

    return this;
  }

  /**
   * @returnss {string}
   */
  generatePlayerId() {
    return this._playerPrefix 
      + (Math.floor(this._minIdLength + Math.random() * (this._maxIdLength - this._minIdLength)));
  }

  /**
   * @param {DOMObject} containerObject - DOM object of component
   */
  initializePlayer(containerObject) {
    this.initializeContainerObject(containerObject);
    this.initializeComponents(this.DEFAULT_COMPONENTS, this.playerId);
    this.initializePlayerOptions(this.options);
    this.initializeComponentsEvents();
  }

  /**
   * VideoPlayer initialization method
   * @param {DOMObject} containerObject
   * @param {Object} options
   */
  initializeContainerObject(containerObject) {
    var videoPlayer = containerObject.querySelector('video');

    try {
      if (typeof videoPlayer == 'object' && videoPlayer) {
        this.videoPlayer = videoPlayer;
      } else {
        throw new InvalidTypeException('Invalid type of video player object.');
      }
    } catch(exception) {
      console.error(exception.message);
    }
  }

  /**
   * @param {Array} componentsNamesArray 
   * @param {Integer} playerId 
   */
  initializeComponents(componentsNamesArray = [], playerId) {
    var componentsObject = {},
        componentsFabric = new ComponentsFabric();

    componentsNamesArray.forEach(componentName => {
      componentsObject[componentName.toLowerCase()] = componentsFabric.makeOne(componentName, this.videoPlayer);
      componentsObject[componentName.toLowerCase()].id = playerId + '-' + ComponentsHelper.COMPONENTS_NAMES[componentName];
      componentsObject[componentName.toLowerCase()].videoPlayer = this.videoPlayer;
    });

    this.components = componentsObject;
  }

  /**
   * @param {Object} options
   */
  initializePlayerOptions(options) {
    if(options.videoplayer) {
      let videoPlayerOptionsModel = (new VideoPlayerModel).fromObject(options.videoplayer);
      
      for(let [key, value] of Object.entries(videoPlayerOptionsModel)) {
        this.videoPlayer.setAttribute(key, value);
      }
    }

    /**
     * Models initialization
     */
    Object.keys(options.components).forEach(componentName => {
      for( let [key, value] of Object.entries(options.components[componentName]) ) {
        this.components[componentName][key] = value;
      }
    });
  }

  /**
   * @returns {void}
   */
  initializeComponentsEvents() {
    for(let componentName of Object.keys(this.components)) {
      this.components[componentName].events.forEach(event => {
        this.components[componentName].setEvent(
          event.eventTarget,
          event.eventName,
          event.eventCallback,
        );
      });
    }
  }

}