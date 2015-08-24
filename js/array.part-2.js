(function() {
  /**
   * Creating array inside JavaScript.
   *   Goals: Make all the tests pass.
   *
   * NOTE: You must leave the expected unchanged!
   *
   * Need some helps? Go to mdn:
   *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
   */

  'use strict';

  describe('Array:', function() {
    describe('method', function() {
      describe('isArray([Array]):', function() {
        it('checks if a variable is or is not an Array.', function() {
          var arrayToCheck = [];
          var objectToCheck = {};

          var assertArray = null; // call method here
          var assertObject = null; // call method here

          expect(assertArray).toBe(true);
          expect(assertObject).toBe(false);
        });
      });
    });

    describe('mutator method (modify the original array)', function() {
      describe('reverse():', function() {
        it('reverse the order of the items.', function() {
          var array = ['third', 'second', 'first'];

          array; // call method here.

          expect(array).toEqual(['first', 'second', 'third']);
        });
      });

      describe('sort():', function() {
        it('sorts the items of the array.', function() {
          var array = [3, 1, 2];

          array; // call method here.

          expect(assert).toEqual([1, 2, 3]);
        });
      });

      describe('pop()', function() {
        it('removes the last item of an array and return it.', function() {
          var array = ['first', 'removeMe'];

          var itemRemoved = array; // call method here;

          expect(array).toEqual(['first']);
          expect(itemRemoved).toBe('removeMe');
        });
      });

      describe('push()', function() {
        it('adds one or more item into array and return the new length.', function() {
          var array = [];

          var firstItemToPush = 42;
          var secondItemToPush = 23;

          var newLength = array; // call method here.

          expect(array).toEqual([42, 23]);
          expect(newLength).toBe(2);
        });
      });

      describe('shift()', function() {
        it('removes the first item of an array and return it.', function() {
          var array = ['removeMe', 'item'];

          var itemRemoved = array; // call method here.

          expect(array).toEqual(['item']);
          expect(itemRemoved).toBe('removeMe');
        });
      });

      describe('unshift()', function() {
        it('add one or more elements to the front of an array and return the new length.', function() {
          var array = ['last'];

          var firstItemToPush = 'first';
          var secondItemToPush = 'second';

          var newLength = array; // call method here.

          expect(array).toEqual(['first', 'second', 'last']);
          expect(newLength).toBe(3);
        });
      });
    });

    describe('accessor method (return some represetation of the array)', function() {
      describe('concat()', function() {
        it('returns a new array with the original array joined whith other array or value.', function() {
          var originalArray = ['original'];
          var joinedArray = ['joined']; // can be also just 'joined'

          var assert = originalArray; // call method here.

          expect(assert).toEqual(['original', 'joined']);
        });
      });

      describe('join([separator=",""])', function() {
        it('joins all the methods of an array into a string.', function() {
          var array = ['Hello', 'World'];
          var separator = ' ';

          var assert = array; // call method here.

          expect(assert).toBe('Hello World');
        }); 
      });

      describe('slice([begin] [, end])', function() {
        it('extracts a section from "begin" to "end" and returns a new Array.', function() {
          var array = ['I am not in', 'I am in', 'me to', 'me not'];

          var assert = array; // call method here.

          expect(assert).toEqual(['I am in', 'me to']);
        });
      });
    });

    describe('iterators method', function() {
      describe('forEach([Function]):', function() {
        it('iterate all items with a callback function.', function() {
          var array = ['first', 'second'];
          var newArray = [];

          function callback(item) {
            newArray.push(item);
          }

          array; // call method here.

          expect(newArray).toEqual(array);
        });
      });
    });
  });
})();
