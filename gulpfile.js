/**
 * Common gulp file
 */

var gulp = require('gulp'),
    gulpConcat = require('gulp-concat'),
    rename = require("gulp-rename"),
    uglify = require('gulp-uglify-es').default,
    clean = require('gulp-clean'),
    del = require('del');

gulp.task(
  'build',
  function() {

    /**
     * Build queue
     */
    var queue = [
      'tmp/video-player/Helpers/VideoPlayerHelper.js',
      'tmp/video-player/Helpers/VideoPlayerHTMLHelper.js',
      'tmp/video-player/Helpers/ComponentsHelper.js',
      'tmp/video-player/Client/VideoPlayer.js',
      'tmp/video-player/Components/Component.js',
      'tmp/video-player/Components/PlayButton.js',
      'tmp/video-player/Components/PauseButton.js',
      'tmp/video-player/Components/MuteButton.js',
      'tmp/video-player/Components/FullscreenButton.js',
      'tmp/video-player/Components/VolumeButton.js',
      'tmp/video-player/Components/TimelineProgressbar.js',
      'tmp/video-player/Components/ComponentsFabric.js',
      'tmp/video-player/Components/Decorators/Decorator.js',
      'tmp/video-player/Components/Decorators/BaseDecorators/ButtonDecorator.js',
      'tmp/video-player/Components/Decorators/BaseDecorators/ProgressbarDecorator.js',
      'tmp/video-player/Components/Decorators/PlayButtonDecorator.js',
      'tmp/video-player/Components/Decorators/PauseButtonDecorator.js',
      'tmp/video-player/Components/Decorators/MuteButtonDecorator.js',
      'tmp/video-player/Components/Decorators/FullscreenButtonDecorator.js',
      'tmp/video-player/Models/BaseModels/BaseModel.js',
      'tmp/video-player/Models/VideoPlayerModel.js',
      'tmp/video-player/Models/PlayButtonModel.js',
      'tmp/video-player/Models/PauseButtonModel.js',
      'tmp/video-player/Models/MuteButtonModel.js',
      'tmp/video-player/Models/FullscreenButtonModel.js',
      'tmp/video-player/Models/VolumeButtonModel.js',
      'tmp/video-player/Models/TimelineProgressbarModel.js',
      'tmp/video-player/Models/EventModel.js',
      'tmp/video-player/Models/ModelsFabric.js',
      'tmp/video-player/Exceptions/VPException.js',
      'tmp/video-player/Exceptions/InvalidTypeException.js',
      'tmp/video-player/Exceptions/UndefinedComponentException.js',
    ];

    gulp
      .src('libs/video.player.min.js', {read: false, allowEmpty: true})
      .pipe(clean());

    return gulp.src(queue)
      .pipe(gulpConcat('video.player.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('libs/'));
  }
);

/**
 * Remove temporary directory task
 */
gulp.task(
  'removeTmpDir',
  function() {
    return del('tmp', {force:true});
  }
);