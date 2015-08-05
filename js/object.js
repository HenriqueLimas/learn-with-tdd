(function() {
  /**
   * Creating object inside JavaScript.
   *   Goals: Make all the tests pass.
   *
   * NOTE: You must leave the expected unchanged!
   *
   * Need some helps? Go to mdn:
   *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
   */

  'use strict';

  describe('Object:', function() {
    var object;

    beforeEach(function() {
      object = undefined;
    });

    describe('creation', function() {
      it('is simple as {}.', function() {
        expect(typeof object).toBe('object');
      });

      it('defining properties is simple', function() {
        expect(object.foo).toBeDefined();
      });

      it('defining methods is simple too', function() {
        expect(typeof object.firstMethod).toBe('function');
      });
    });

    describe('using "this" property, meens the instance of the object:', function() {
      beforeEach(function() {
        object.setFoo = function(newFoo) {

        };
      });

      it('can be used inside object methods.', function() {
        var newFoo = 42;

        object.setFoo(newFoo);

        expect(object.foo).toBe(newFoo);
      });
    });
  });
})();
