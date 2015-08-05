(function() {
  /**
   * Creating object inside JavaScript.
   *   Goals: Make all the tests pass.
   *
   * NOTE: You must leave the expected unchanged!
   * Helps: If you need some help you can go to mdn:
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
        expect(object.firstProperty).toBeDefined();
      });

      it('defining methods is simple too', function() {
        expect(typeof object.firstMethod).toBe('function');
      });
    });

    describe('using "this" property:', function() {
      beforeEach(function() {
        object.setProperty = function(newProperty) {

        };
      });

      it('can be used inside object methods.', function() {
        var newValue = 42;

        object.setProperty(newValue);

        expect(object.firstProperty).toBe(newValue);
      });
    });
  });
})();
