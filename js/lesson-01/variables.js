(function() {
  /**
   * Variables inside JavaScript.
   *   Goals: Make all the tests pass.
   *
   * NOTE: You must leave the expected unchanged!
   *
   * Need some helps? Go to mdn:
   *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
   */

  'use strict';

  describe('Variables:', function() {
    describe('declaring variables', function() {
      it('need the keyword "var" before a variable name.', function() {
        function testingVariables() {
          myFirstVariable;
        }

        expect(testingVariables).not.toThrowError();
      });
    });

    describe('initializing variables', function() {
      it('every variable without assignation is "undefined".', function() {
        expect(iamUndefined).toBeUndefined();
      });

      describe('strings', function() {
        it('is simple as adding two single quotes.', function() {
          var iAmAString = 42;

          expect(typeof iAmAString).toBe('string');
        });
      });

      describe('numbers', function() {
        it('is also simple as assigning with a number', function() {
          var iAmANumber = 'Change me with one number.';

          expect(typeof iAmANumber).toBe('number');
        });
      });

      it('is possible initialize several variables in the same line.', function() {
        var foo,
            bar;

        foo = 42;

        expect(bar).toBe(42);
      });

      it('can use a variable before the declaration (the name of that is "Hoisting").', function() {
        hoistingVariable = 42;

        // declare variable here

        expect(hoistingVariable).toBe(42);
      });
    });
  });
})();
