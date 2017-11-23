require('./tasks/browser-sync');
require('./tasks/styles');
require('./tasks/scripts');
require('./tasks/images');

gulp.task( 'default', ['styles', 'customJS', 'images', 'browser-sync'], function() {
	gulp.watch( scss.styleWatchFiles, [ 'styles' ] );
	gulp.watch( js.customJSWatchFiles, [ 'customJS', reload ] ); // Reload on customJS file changes.
});
