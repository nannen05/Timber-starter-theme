
gulp.task( 'browser-sync', function() {
  browserSync.init( {

    // For more options
    // @link http://www.browsersync.io/docs/options/

    // Project URL.
    // proxy: projectURL,

    // `true` Automatically open the browser with BrowserSync live server.
    // `false` Stop the browser from automatically opening.
    open: true,

    // Inject CSS changes.
    // Commnet it to reload browser for every CSS change.
    injectChanges: true,

    // Use a specific port (instead of the one auto-detected by Browsersync).
    // port: 7000,

  } );
});