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
    describe('creation:', function() {
      it('is simple to create as [].', function() {
        var myArray;

        expect(myArray).toEqual(jasmine.any(Array));
      });
    });

    it('is simple to access an Array with an index.', function() {
      var array = ['firstElement', 'secondElement'];
      var assertFirst;
      var assertSecond;

      expect(assertFirst).toBe('firstElement');
      expect(assertSecond).toBe('secondElement');
    });

    it('has a "length" property to mantain the length of the array.', function() {
      var array = [42];

      var assert = array; // use length property like the test "defining properties is simple" into Object test.

      expect(assert).toBe(1);
    });

    it('has "push" method to add an item to the end of the array.', function() {
      var itemToAdd = 'lastItem';
      var array = ['firstItem'];

      array; // call method here.

      expect(array).toEqual(['firstItem', 'lastItem']);
    });

    it('has "unshift" method to add an item to the front of the array.', function() {
      var itemToAdd = 'firstItem';
      var array = ['lastItem'];

      array; // call method here.

      expect(array).toEqual(['firstItem', 'lastItem']);
    });

    it('has "pop" method to remove an item from the end of the array.', function() {
      var array = ['item', 'removeMe'];

      array; // call method here.

      expect(array).toEqual(['item']);
    });

    it('has "shift" method to remove an item from the front of the array.', function() {
      var array = ['removeMe', 'item'];

      array; // call method here.

      expect(array).toEqual(['item']);
    });

    it('find the first index with "indexOf" method.', function() {
      var item = 'findMe';
      var array = ['first', 'second', item];

      var assert = array; // call method here.

      expect(assert).toBe(2);
    });

    it('find the last index with "lastIndexOf" method.', function() {
      var item = 'findMe';
      var array = ['first', 'findMe', 'third', item];

      var assert = array; // call method here.

      expect(assert).toBe(3);
    });

    describe('remove an item by index:', function() {
      it('find the index with "indexOf" and remove it with the "splice" method.', function() {
        var array = ['item', 'removeMe', 'last'];
        var indexToRemove = array;

        array; // call method splice here.

        expect(array).toEqual(['item', 'last']);
      });
    });

    it('copy an array with the "slice" method', function() {
      var copyMe = ['firstItem', 'secondItem'];

      var newArray = copyMe; // call method here.

      expect(newArray).toEqual(copyMe);

      expect(newArray).not.toBe(copyMe); // testing references to be differents.
    });
  });
})();
