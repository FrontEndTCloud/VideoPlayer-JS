/**
 * @class ComponentsFabric
 * @package Components
 */

class ComponentsFabric {

  /**
   * @param {String} componentName
   * @param {DOMObject} videoPlayer
   * @returns {Component}
   * @throws UndefinedComponentException
   */
  makeOne(componentName, videoPlayer) {

    var component;

    switch(componentName) {
      case 'PlayButton':
        component = new PlayButton(videoPlayer);
        break;
      case 'PauseButton':
        component = new PauseButton(videoPlayer);
        break;
      case 'MuteButton':
        component = new MuteButton(videoPlayer);
        break;
      case 'FullscreenButton':
        component = new FullscreenButton(videoPlayer);
        break;
      case 'VolumeButton':
        component = new VolumeButton(videoPlayer);
        break;
      case 'TimelineProgressbar':
        component = new TimelineProgressbar(videoPlayer);
        break;
      case 'SourcesCollection':
        component = new SourcesCollection(videoPlayer);
        break;
      default:
        throw new UndefinedComponentException(componentName + ' is not found.');
        break;
    }
    
    return component;
  }

  /**
   * @param {Array} componentsNamesArray 
   * @param {DOMObject} videoPlayer
   * @returns {Array}
   */
  make(componentsNamesArray, videoPlayer) {
    var componentsArray = [];

    componentsNamesArray.forEach(componentName => {
      componentsArray.push(this.makeOne(componentName, videoPlayer));
    });

    return componentsArray;
  }

}