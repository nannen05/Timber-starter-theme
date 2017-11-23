
import sass from 'gulp-sass';
import minifycss from 'gulp-uglifycss'; // Minifies CSS files.
import autoprefixer from 'gulp-autoprefixer'; // Autoprefixing magic.
import mmq from 'gulp-merge-media-queries'; // Combine matching media queries into one media query definition.

gulp.task('styles', function () {
    gulp.src( scss.styleSRC )
    .pipe( sourcemaps.init() )
    .pipe( sass( {
      errLogToConsole: true,
      outputStyle: 'compact',
      // outputStyle: 'compressed',
      // outputStyle: 'nested',
      // outputStyle: 'expanded',
      precision: 10
    } ) )
    .on('error', console.error.bind(console))
    .pipe( sourcemaps.write( { includeContent: false } ) )
    .pipe( sourcemaps.init( { loadMaps: true } ) )
    //.pipe( autoprefixer( AUTOPREFIXER_BROWSERS ) )

    //.pipe( sourcemaps.write ( scss.styleDestination ) )
    //.pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
    .pipe( gulp.dest( scss.styleDestination ) )

    .pipe( filter( '**/*.css' ) ) // Filtering stream to only css files
    .pipe( mmq( { log: true } ) ) // Merge Media Queries only for .min.css version.

    .pipe( browserSync.stream() ) // Reloads style.css if that is enqueued.

    .pipe( rename( { suffix: '.min' } ) )
    .pipe( minifycss( {
      maxLineLen: 10
    }))
    //.pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
    .pipe( gulp.dest( scss.styleDestination ) )

    .pipe( filter( '**/*.css' ) ) // Filtering stream to only css files
    .pipe( browserSync.stream() )// Reloads style.min.css if that is enqueued.
    .pipe( notify( { message: 'TASK: "styles" Completed! 💯', onLast: true } ) )
});