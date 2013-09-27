'use strict';

var countio = require('../lib/countio.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

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
    

    test.expect( 0 );
    
    //test.equal( countio.countFiles('test/test.txt'), 27, 'Our test file should have 27 characters.' );

    test.done();
  },

  'one invalid file': function( test ) {
    test.expect( 0 );
    
    //test.throws( countio.countFiles('fakefile.md'), 'ENOENT', 'Passing an invalid file throws an error.' );

    test.done();
  }
};
