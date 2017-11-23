// JS related plugins.
import concat from 'gulp-concat'; // Concatenates JS files
import uglify from 'gulp-uglify'; // Minifies JS files

 gulp.task( 'customJS', function() {
    gulp.src( js.jsCustomSRC )
    .pipe( concat( js.jsCustomFile + '.js' ) )
    //.pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
    .pipe( gulp.dest( js.jsCustomDestination ) )
    .pipe( rename( {
      basename: js.jsCustomFile,
      suffix: '.min'
    }))
    .pipe( uglify() )
    //.pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
    .pipe( gulp.dest( js.jsCustomDestination ) )
    .pipe( notify( { message: 'TASK: "customJs" Completed! 💯', onLast: true } ) );
 });