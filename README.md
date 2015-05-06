# [Front End Template](https://github.com/JulienMelissas/front-end-template/)

A front-end project template based off of the workflow from the [Sage](https://github.com/roots/sage/) WordPress starter theme and HTML5BP.

## Features

* [gulp](http://gulpjs.com/) build script that compiles both Less and Sass, checks for JavaScript errors, optimizes images, and concatenates and minifies files
* [BrowserSync](http://www.browsersync.io/) for keeping multiple browsers and devices synchronized while testing, along with injecting updated CSS and JS into your browser while you're developing
* [Bower](http://bower.io/) for front-end package management
* [asset-builder](https://github.com/austinpray/asset-builder) for the JSON file based asset pipeline
* [normalize.css](http://necolas.github.io/normalize.css/) for a good CSS reset

## Install gulp and Bower

Building the project requires [node.js](http://nodejs.org/download/). We recommend you update to the latest version of npm: `npm install -g npm@latest`.

From the command line:

1. Install [gulp](http://gulpjs.com) and [Bower](http://bower.io/) globally with `npm install -g gulp bower`
2. Navigate to the theme directory, then run `npm install`
3. Run `bower install`

You now have all the necessary dependencies to run the build process.

## Available gulp commands

* `gulp` — Compile and optimize the files in your assets directory
* `gulp watch` — Compile assets when file changes are made
* `gulp --production` — Compile assets for production (no source maps). Keep in mind that if you run this, you'll need to update the filenames in `index.html` or wherever you have it yourself.

## Using BrowserSync

It happens automatically as soon as you run `gulp watch`. Yay!

## CSS Preprocessors
By default this repo uses Sass - but there is a [Less branch](https://github.com/JulienMelissas/front-end-template/tree/less) availble for those who prefer Less.
For those using Sass, please keep in mind the gulfile uses `glup-sass` - which uses libsass.
