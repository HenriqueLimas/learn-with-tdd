(function() {
  /**
   * If statement inside JavaScript.
   *   Goals: Make all the tests pass.
   *
   * NOTE: You must leave the expected unchanged!
   *
   * Need some helps? Go to mdn:
   *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
   */
  'use strict';

  describe('if(condition)):', function() {
    it('executes a statement if a condition is true.', function() {
      var condition = false;
      var iAmGoingToChange;

      if (condition) {
        iAmGoingToChange = 42;
      }


      expect(iAmGoingToChange).toBe(42);
    });

    it('can use && (and) to evaluate two or more condition.', function() {
      var condition1 = false;
      var condition2 = true;

      var iAmGoingToChange;

      if (condition1 && condition2) {
        iAmGoingToChange = 42;
      }

      expect(iAmGoingToChange).toBe(42);
    });

    it('can use || (or) to evaluate two or more condition and executes the statement when one or more condition is true.', function() {
      var condition1 = false;
      var condition2 = false;

      var iAmGoingToChange;

      if (condition1 || condition2) {
        iAmGoingToChange = 42;
      }

      expect(iAmGoingToChange).toBe(42);
    });

    describe('when an first condition is false', function() {
      it('can use an "else" statement.', function() {
        var condition1 = false; // Don't change this.

        var iAmGoingToChange;

        if (condition1) {
          console.log('Nothing here!');
        } // use else statement

        expect(iAmGoingToChange).toBe(42);
      });

      it('can made multiple statement using "else if(condition)".', function() {
        var condition1 = false;
        var condition2 = false;

        var iAmGoingToChange;

        if (condition1) {
          console.log('Nothing here');
        } // use else if() statement

        expect(iAmGoingToChange).toBe(42);
      });
    });
  });
})();
