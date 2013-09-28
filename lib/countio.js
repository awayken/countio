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

function testData( data, regex ) {
	var count = 0,
		search = [];

	if ( data && data.length ) {
		while ( ( search = regex.exec( data ) ) !== null ) {
			count++;
		}
	}

	return count;
}

exports.getCharacters = function( data ) {
	var regex = /[^\t\r\n]/g,
		characters = testData( data, regex );

	return characters;
};

exports.getWords = function( data ) {
	var regex = /\w+/g,
		words = testData( data, regex );

	return words;
};

exports.getSections = function( data ) {
	var regex = /(# |--+|==+)/g,
		sections = testData( data, regex ),
		search = /# /.exec( data );

	if ( data && data.length ) {
		sections++;
		if ( search && search.index === 0 ) {
			sections--;
		}
	}

	return sections;
};

exports.getChapters = function( data ) {
	var regex = /(# )/g,
		chapters = testData( data, regex ),
		search = /# /.exec( data );

	if ( data && data.length ) {
		chapters++;
		if ( search && search.index === 0 ) {
			chapters--;
		}
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
			var resolvedPath = fs.realpathSync( file ),
				data = fs.readFileSync( resolvedPath, { encoding: 'UTF-8' } );
			
			characters += exports.getCharacters( data );
			words += exports.getWords( data );
			sections += exports.getSections( data );
			chapters += exports.getChapters( data );
		});
	}

	return {
		characters: characters,
		words: words,
		sections: sections,
		chapters: chapters
	};
};
