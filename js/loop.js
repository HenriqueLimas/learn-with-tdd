(function() {
  /**
   * Loops inside JavaScript.
   *   Goals: Make all the tests pass.
   *
   * NOTE: You must leave the expected unchanged!
   *
   * Need some helps? Go to mdn:
   *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
   */

  'use strict';

  describe('Loops:', function() {
    describe('for([initialization];[condition];[final-expression])', function() {
      it('repeats until a specified condition evaluates to false.', function() {
        var count = 0;
        var maxValue = 0;

        for(var i = 0; i < maxValue; i++) { // i++ is the same as "i = i + 1"
          count++;
        }

        expect(count).toBe(10);
      });

      it('can use a "break" statement to break the loop.', function() {
        var count = 0;

        for(var i = 0; i < 10; i++) {
          if (count > 3) {

          }

          count++;
        }

        expect(count).toBe(4);
      });

      it('is not required to put "initialization", "condition" and the "final-expression".', function() {
        var count = 0;

        for(;false;count = 0) {
          count++;
          break; // Use "break" statement to stop the loop.
        }

        expect(count).toBe(1);
      });

      it('can be use to interate array (but prefer "forEach").', function() {
        var array = [1, 2, 3];

        for(;false;) {
          array[i]++;
        }

        expect(array).toEqual([2,3,4]);
      });
    });

    describe('do...while(condition) statement', function() {
      it('repeats until a specified condition evaluates to false.', function() {
        var count = 0;
        var maxValue = 10;

        do {
          count++;
        } while(false);

        expect(count).toBe(10);
      });

      it('executes once before the condition is checked.', function() {
        var count = 0;

        do {
          count;
        } while(false);

        expect(count).toBe(1);
      });
    });

    describe('while(condition)', function() {
      it('repeats until a specified condition evaluates to false.', function() {
        var count = 0;
        var maxValue = 10;

        while(false) {
          count++;
        }

        expect(count).toBe(10);
      });
    });

    describe('for...in statement', function() {
      it('iterates a specified variable over all the enumerable properties of an object.', function() {
        var array = [];

        var object = {}; // insert properties here;

        for(var key in object) {
          array.push(key);
        }

        expect(array).toEqual(['id', 'title']);
      });

      it('is not made for interating Arrays!!!', function() {
        var keys = [];
        var array = ['Dont interate me with for...of'];

        array.iAmEnumerablePropertie = 42;

        // REMOVE FOR...IN!!
        for(var key in array) {
          keys.push(key);
        }

        expect(keys).toEqual([]);
      });
    });

    describe('break statement', function() {
      it('terminates a loop.', function() {
        var count = 0;

        while(count < 100) {

          count++;
        }

        expect(count).toBe(0);
      });
    });

    describe('continue statement', function() {
      it('continue the loop.', function() {
        var count = 0;

        while (count < 100) {
          if (count === 42) {

          }

          count++;
        }

        expect(count).toBe(42);
      });
    });

    describe('label statement', function() {
      it('can be used to identify a loop.', function() {
        var count = 0;

        firstLoop: // this is the label for the loop.
        while(count < 100) {
          
          while(count < 2) {
            // break the first loop here.
            count++;
          }

          count++;
        }

        expect(count).toBe(0);
      });
    });
  });
})();
