import gulp from 'gulp';

// Utility related plugins.
import rename from 'gulp-rename'; // Renames files E.g. style.css -> style.min.css
import lineec from 'gulp-line-ending-corrector'; // Consistent Line Endings for non UNIX systems. Gulp Plugin for Line Ending Corrector (A utility that makes sure your files have consistent line endings)
import filter from 'gulp-filter'; // Enables you to work on a subset of the original files by filtering them using globbing.
import sourcemaps from 'gulp-sourcemaps'; // Maps code in a compressed file (E.g. style.css) back to it’s original position in a source file (E.g. structure.scss, which was later combined with other css files to generate style.css)
import notify from 'gulp-notify'; // Sends message notification to you

import {create as bsCreate} from 'browser-sync';
const browserSync = bsCreate();

import wpPot from 'gulp-wp-pot'; // For generating the .pot file.
import sort from 'gulp-sort'; // Recommended to prevent unnecessary changes in pot-file.

//Globals
global.gulp = gulp;
global.rename = rename;
global.leneec = lineec;
global.filter = filter;
global.sourcemaps = sourcemaps;
global.notify = notify;

global.browserSync = browserSync;
global.reload = browserSync.reload;

global.wpPot = wpPot;
global.sort = sort;

global.scss = {
	'styleSRC' 		   : './static/scss/styles.scss',
	'styleDestination' : './compiled',
	'styleWatchFiles'  : './static/scss/**/*.scss',
}

global.js = {
	'jsCustomSRC'         : './static/js/*.js',
	'jsCustomDestination' : './compiled/js/',
	'jsCustomFile'        : 'custom',
	'customJSWatchFiles'  : './static/js/**/*.js'
}

global.images = {
	'imagesSRC'         : './static/assets/*.{png,jpg,gif,svg}',
	'imagesDestination' : './compiled/img'
}

require('./commands');