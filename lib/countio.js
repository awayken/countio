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

exports.getCharacters = function( data ) {
	var characters = 0;

	if ( data && data.length ) {
		characters = data.length;
	}

	return characters;
};

exports.getWords = function( data ) {
	var words = 0;

	if ( data && data.length ) {
		words = data.split(' ').length;
	}

	return words;
};

exports.getSections = function( data ) {
	var sections = 0;

	if ( data && data.length ) {
		sections = data.split('===').length;
	}

	return sections;
};

exports.getChapters = function( data ) {
	var chapters = 0;

	if ( data && data.length ) {
		chapters = data.split('# ').length;
	}

	return chapters;
};

exports.countFiles = function( inputFiles ) {
	var characters = 0,
		words = 0,
		sections = 0,
		chapters = 0,
		files = [];

	if ( inputFiles && inputFiles.length ) {
		if ( util.isArray( inputFiles ) ) {
			files = inputFiles;
		} else {
			files = [ inputFiles ];
		}
	}

	if ( files.length ) {
		files.forEach(function( file ) {
			fs.realpath( file, function( err, resolvedPath ) {
				if ( err ) {
					throw err;
				}
				var data = fs.readFileSync( resolvedPath, { encoding: 'UTF-8' } );

				characters += exports.getCharacters( data );
				words += exports.getWords( data );
			});
		});
	}

	return {
		characters: characters,
		words: words,
		sections: sections,
		chapters: chapters
	};
};
