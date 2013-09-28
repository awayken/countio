'use strict';

var countio = require('../lib/countio.js');

exports['countio'] = {
  setUp: function( done ) {
    done();
  },

  'no args': function( test ) {
    test.expect( 2 );
    
    test.equal( countio.countFiles().characters, 0, 'No files passed in means no characters.' );
    test.equal( countio.getCharacters(), 0, 'No file passed in means no characters.' );

    test.done();
  },

  'individual count methods': function( test ) {
    var testSentence = 'This is a test sentence.';

    test.expect( 4 );
    
    test.equal( countio.getCharacters( testSentence ), 24, 'Our sentence should have 27 characters.' );
    test.equal( countio.getWords( testSentence ), 5, 'Our sentence should have 5 words.' );
    test.equal( countio.getSections( testSentence ), 1, 'Our sentence should have 1 section.' );
    test.equal( countio.getChapters( testSentence ), 1, 'Our sentence should have 1 chapter.' );

    test.done();
  },

  'one valid file': function( test ) {
    var testCount = countio.countFiles('test/test.txt');

    test.expect( 4 );
    
    test.equal( testCount.characters, 210, 'Our test file should have 210 characters.' );
    test.equal( testCount.words, 42, 'Our test file should have 42 words.' );
    test.equal( testCount.sections, 3, 'Our test file should have 3 sections.' );
    test.equal( testCount.chapters, 2, 'Our test file should have 2 chapters.' );

    test.done();
  },

  'one invalid file': function( test ) {
    test.expect( 0 );
    
    //test.throws( countio.countFiles('fakefile.md'), 'ENOENT', 'Passing an invalid file throws an error.' );

    test.done();
  }
};
