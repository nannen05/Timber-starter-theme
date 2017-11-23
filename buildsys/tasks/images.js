import imagemin from 'gulp-imagemin';

 gulp.task( 'images', function() {
  gulp.src( images.imagesSRC )
    .pipe( imagemin( {
          progressive: true,
          optimizationLevel: 3, // 0-7 low-high
          interlaced: true,
          svgoPlugins: [{removeViewBox: false}]
        } ) )
    .pipe(gulp.dest( images.imagesDestination ))
    .pipe( notify( { message: 'TASK: "images" Completed! 💯', onLast: true } ) );
 });