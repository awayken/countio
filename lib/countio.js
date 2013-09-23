/*
 * countio
 * https://github.com/awayken/countio
 *
 * Copyright (c) 2013 Miles Rausch
 * Licensed under the MIT license.
 */

'use strict';

var util = require('util'),
	fs = require('fs');

exports.awesome = function() {
  return 'awesome';
};

exports.getCharacters = function( inputFiles ) {
	var characters = 0,
		files = inputFiles;

	if ( !util.isArray( inputFiles ) ) {
		files = [ inputFiles ];
	}

	files.forEach(function( file, index ) {
		console.log( file );
	});

	return characters;
};
