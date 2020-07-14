/**
 * @class CatalogModel
 * @package Models
 */

class CatalogModel extends BaseModel {

  /**
   * @var String
   */
  _title;
  
  /**
   * @var String
   */
  _subTitle;

  /**
   * @var String
   */
  _slug;

  /**
   * @var CatalogCollectionModel
   */
  _video;

  /**
   * @returns String
   */
  get title() {
    return this._title;
  }

  /**
   * @param String
   */
  set title(title) {
    this._title = title;
  }

  /**
   * @returns String
   */
  get subTitle() {
    return this._subTitle;
  }

  /**
   * @param String
   */
  set subTitle(subTitle) {
    this._subTitle = subTitle;
  }

  /**
   * @returns String
   */
  get slug() {
    return this._slug;
  }

  /**
   * @param String slug
   */
  set slug(slug) {
    this._slug = slug;
  }

  /**
   * @returns Array<CatalogModel>
   */
  get video() {
    return this._video;
  }

  /**
   * @param CatalogCollectionModel
   */
  set video(video) {
    this._video = (new LinksCollectionModel(video)).collection;
  }

  fromObject(object = {}) {
    if(object.title)
      this.title = object.title;

    if(object.subTitle)
      this.subTitle = object.subTitle;

    if(object.slug)
      this.slug = object.slug;

    if(object.video)
      this.video = object.video;

    return this;
  }
}