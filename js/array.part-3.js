(function() {
  /**
   * Array methods in JavaScript.
   *   Goals: Make all the tests pass.
   *
   * NOTE: You must leave the expected unchanged!
   *
   * Need some helps? Go to mdn:
   *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
   */

  'use strict';

  describe('Array:', function() {
    describe('iterators method', function() {
      describe('every([Function]):', function() {
        it('returns true if every element of the array satisfies the provided testing callback function.', function() {
          var array = [42, 24];

          function callback(item) {
            return item % 2 === 0;
          }

          var assert = array; // call method here.

          expect(assert).toBe(true);
        });
      });

      describe('some([Function]):', function() {
        it('returns true if one or more elements of the array satisfies the provided testing callback function.', function() {
          var array = ['I am a false condition', 'The only true', 'I am false too'];

          function callback(item) {
            return item === 'The only true';
          }

          var assert = array; // call method here.

          expect(assert).toBe(true);
        });
      });

      describe('filter([Function]):', function() {
        it('creates a new array with all the elements of the array that satisfies the provided testing callback function.', function() {
          var array = ['filter me', false, 42, 'filter me', void 0]; // "void 0" is equal to "undefined".

          function callback(item) {
            return item === 'filter me';
          }

          var filteredArray = array; // call method here.

          expect(filteredArray).toEqual(['filter me', 'filter me']);
        });
      });

      describe('map([Function]):', function() {
        it('creates a new array with the result of calling a provided function on every element of the array.', function() {
          var array = [{
            id: 42,
            name: 'Ford Prefect'
          }, {
            id: 23,
            name: 'Luke Skywalker'
          }];

          function callback(item) {
            return; // Return a new object with the name property.
          }

          var mapedArray = arra; // call method here.

          expect(mapedArray).toEqual([{
            name: 'Ford Prefect'
          }, {
            name: 'Luke Skywalker'
          }]);
        });
      });

      describe('reduce([Function] [, initialValue]):', function() {
        it('reduces an array in a single value appling a function against an accumulated value of each element of the array.', function() {
          var array = [1, 2, 3, 4];

          function callback(accumulatedItem, currentItem) {
            return accumulatedItem + currentItem;
          }

          var reduced = array; // call method here.

          expect(reduced).toBe(10);
        });
      });

      describe('reduceRight([Function] [, initialValue]):', function() {
        it('reduces an array from right-to-left in a single value appling a function against an accumulated value of each element of the array.', function() {
          var array = [[1, 2], [3, 4], [5, 6]];

          function callback(accumulatedItem, currentItem) {
            return accumulatedItem.concat(currentItem);
          }

          var reduced = array; // call method here. Tips: use the initial value to start the accumulator.

          expect(reduced).toBe(10);
        });
      });
    });
  });
})();
