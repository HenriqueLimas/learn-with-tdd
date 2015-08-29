(function() {
  /**
   * Strings inside JavaScript.
   *   Goals: Make all the tests pass.
   *
   * NOTE: You must leave the expected unchanged!
   *
   * Need some helps? Go to mdn:
   *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
   */

  'use strict';

  describe('String:', function() {
    it('has a "length" property to mantain the length of a string.', function() {
      var string = '1234';

      var expected = string; // use length property like the test "defining properties is simple" into Object test.

      expect(expected).toBe(4);
    });

    it('concats two or more strings with "+" or "+=".', function() {
      var string1 = 'Hello ';
      var string2 = 'World!';

      var expected = string1;

      expect(expected).toBe('Hello World!');
    });

    describe('method', function() {
      describe('charAt()', function() {
        it('returns the character specified with an index from a string.', function() {
          // Hint: The first index is 0.

          var foo = 'I am foo string';

          var expected = foo; // call method here.

          expect(expected).toBe('a');
        });
      });

      describe('indexOf()', function() {
        it('returns the index of the first occurrence of the specified value.', function() {
          var string = 'I am the all web.';

          var search = 'web'
          var searchEngineIndex = string.indexOf();

          expect(searchEngineIndex).toBe(13);
        });

        it('returns "-1" if the value is not found.', function() {
          var string = 'I am the normal web.';

          var search = 'Deep web';
          var searchEngineIndex = string.indexOf('web');

          expect(searchEngineIndex).toBe(-1);
        });

        it('is case-sensitive.', function() {
          var string = 'FIND ME IF YOU CAN';

          var expected = string.indexOf('find');

          expect(expected).toBe(0);
        });
      });

      describe('localeCompare()', function() {
        var referenceString;
        var compareString;

        describe('when "referenceString" occurs before "compareString".', function() {
          beforeEach(function() {
            referenceString = 'aaaa';
            compareString = 'bbbb';
          });

          it('returns a negative number.', function() {
            var expected = referenceString; // call method here.

            expect(expected).toBeLessThan(0);
          });
        });

        describe('when "referenceString" occurs after "compareString".', function() {
          beforeEach(function() {
            referenceString = 'bbbb';
            compareString = 'aaaa';
          });

          it('returns a positive number.', function() {
            var expected = referenceString; // call method here.

            expect(expected).toBeGreaterThan(0);
          });
        });

        describe('when "referenceString" is equal to "compareString".', function() {
          beforeEach(function() {
            referenceString = 'aaaa';
            compareString = 'aaaa';
          });

          it('returns 0.', function() {
            var expected = referenceString; // call method here.

            expect(expected).toBe(0);
          });
        });
      });

      describe('match()', function() {
        var REG_EXP = /string to find/; // See regular-expression test.

        it('returns an array when matching a string against the regular expression.', function() {
          var assertion = 'string to find'; // call method here with REG_EXP.

          var expected = ['string to find']; // More about '[]' notation into array test.

          expect(assertion).toBe(expected);
        });
      });

      describe('replace()', function() {
        it('returns a new string with some matches of a pattern replaced by a replacement.', function() {
          var string = 'replace me';
          var pattern = ''; // find the correct pattern to be used.

          var replacement = 'replaced';

          var assertion = string; // call method here.

          expect(assertion).toBe('replaced');
        });

        it('can use a callback function instead of a replacement.', function() {
          var string = 'replace me';
          var pattern = ''; // find the correct pattern to be used.

          function callbackReplacement(replacement, offset, originalString) {
            return 'replaced'.toUpperCase();
          };

          var assertion = string; // call method here.

          expect(assertion).toBe('REPLACED');
        });
      });

      describe('search()', function() {
        var REG_EXP = /string to find/; // See regular-expression test.

        it('returns the first index when matching a string against the regular expression.', function() {
          var assertion = 'string to find'; // call method here with REG_EXP.

          var expected = 0;

          expect(assertion).toBe(expected);
        });
      });

      describe('slice()', function() {
        var string = 'Hello sliced';

        it('returns a new string from "beginSlice" to "endSlice".', function() {
          var beginSlice = 6;
          var endSlice = string.length;

          var assertion = string; // call method here.

          expect(assertion).toBe('sliced');
        });

        it('"beginSlice" accepts negative numbers to represent the lasts characters.', function() {
          // Hint: endSlice is optional
          var beginSlice = -6;

          var assertion = string; // call method here.

          expect(assertion).toBe('sliced');
        });

        it('"endSlice" accepts negative numbers and represent "stringLength - endSlice".', function() {
          var beginSlice = 0;
          var endSlice = -7;

          var assertion = string; // call method here.

          expect(assertion).toBe('Hello');
        });
      });

      describe('split()', function() {
        it('splits a string into an array of string by separating the string into substrings.', function() {
          var string = 'This is going to be separeted';
          var separator = 'change me with a white space';

          var assertion = string; // call method here with separator.
          var expected = ['This', 'is', 'going', 'to', 'be', 'separeted']; // More about '[]' notation into array test.

          expect(assertion).toBe(expected);
        });
      });

      describe('substr()', function() {
        it('returns characters in a string start at the specified location through the specified number of characters.', function() {
          var string = 'My long string';
          var startIndex = 8;
          var numberOfCharacters = 6;

          var assertion = string; // call method here.

          expect(assertion).toBe('string');
        });
      });

      describe('substring()', function() {
        it('returns characters in a string between indexA and indexB.', function() {
          var string = 'My long string with long description.';
          var indexA = 8;
          var indexB = 14;

          var assertion = string; // call method here.

          expect(assertion).toBe('string');
        });
      });

      describe('toLowerCase()', function() {
        it('returns the calling string value converted to lowercase.', function() {
          var string = 'LOWERCASE';

          var assertion = string; //call method here.

          expect(assertion).toBe('lowercase');
        });
      });

      describe('toUpperCase()', function() {
        it('returns the calling string value converted to uppercase.', function() {
          var string = 'uppercase';

          var assertion = string; //call method here.

          expect(assertion).toBe('UPPERCASE');
        });
      });

      describe('trim()', function() {
        it('returns a new string without the begin spaces and end spaces.', function() {
          var string = '          This is my trimed string.          ';

          var assertion = string; //call method here.

          expect(assertion).toBe('This is my trimed string.');
        });
      });
    });
  });
})();
