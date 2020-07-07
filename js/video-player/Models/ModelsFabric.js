/**
 * @class ModelsFabric
 * @package Models
 */

class ModelsFabric {

  NAMES_ASSOCIATIONS = {
    'VideoPlayer': 'VideoPlayerModel',
    'PlayButton': 'PlayButtonModel',
    'PauseButton': 'PauseButtonModel',
    'MuteButton': 'MuteButtonModel',
    'FullscreenButton': 'FullscreenButtonModel',
    'VolumeButton': 'VolumeButtonModel',
    'TimelineProgressbar': 'TimelineProgressbarModel',
    'SourceCollection': 'SourceModel',
  };
  
  /**
   * @param {String} name - componentName/componentModel
   * @returns {Object}
   * @throws UndefinedComponentException
   */
  makeOne(name) {
    let component;

    switch(this.findModelName(name).modelName) {
      case 'VideoPlayerModel':
        component = new VideoPlayerModel();
        break;
      case 'PlayButtonModel':
        component = new PlayButtonModel();
        break;
      case 'PauseButtonModel':
        component = new PauseButtonModel();
        break;
      case 'MuteButtonModel':
        component = new MuteButtonModel();
        break;
      case 'FullscreenButtonModel':
        component = new FullscreenButtonModel();
        break;
      case 'VolumeButtonModel':
        component = new VolumeButtonModel();
        break;
      case 'TimelineProgressbarModel':
        component = new TimelineProgressbarModel();
        break;
      case 'SourceModel':
        component = new SourceModel();
        break;
      default:
        throw new UndefinedComponentException(name + ' is not found.');
        break;
    }

    return component;
  }

  /**
   * @param {Array} componentsNamesArray
   * @returns {Array}
   */
  make(componentsNamesArray) {
    var componentsArray = [];

    componentsNamesArray.forEach(componentName => {
      componentsArray.push(this.makeOne(componentName));
    });

    return componentsArray;
  }

  /**
   * @param {String} name 
   * @returns {String}
   */
  findModelName(name) {
    if(this.isModelName(name)) {
      return this.getModelInfoByModelName(name);
    } else {
      return this.getModelInfoByComponentName(name);
    }
  }

  /**
   * @param {String} name
   * @returns {Boolean} 
   */
  isModelName(name) {
    return (/(model)/).test(
      name.toLowerCase()
    );
  }

  /**
   * @param {String} name 
   * @returns {Object|Boolean}
   */
  getModelInfoByModelName(name) {
    let result = false;

    Object.keys(this.NAMES_ASSOCIATIONS).forEach((componentName, index) => {
      if(this.NAMES_ASSOCIATIONS[componentName].toLowerCase() === name.toLowerCase()) {
        result = {
          modelName: this.NAMES_ASSOCIATIONS[componentName],
          componentName: componentName,
          index: index,
        };
      }
    });

    return result;
  }

  /**
   * Method return associated model name with component name
   * @param {String} name - componentName/componentModel
   * @returns {String|Object}
   */
  getModelInfoByComponentName(name) {

    let result = false;

    Object.keys(this.NAMES_ASSOCIATIONS).forEach((componentName, index) => {
      if( componentName.toLowerCase() === name.toLowerCase() ) {
        result = {
          modelName: this.NAMES_ASSOCIATIONS[componentName],
          componentName: name,
          index: index,
        };
      }        
    });

    return result;
  }

}