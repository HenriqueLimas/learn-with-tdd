(function() {
  /**
   * Creating function inside JavaScript.
   *   Goals: Make all the tests pass.
   *
   * NOTE: You must leave the expected unchanged!
   *
   * Need some helps? Go to mdn:
   *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
   */

  'use strict';

  describe('Function:', function() {
    describe('creation', function() {
      it('is simple to create as "function name(){}"', function() {
        expect(typeof myFunction).toBe('function');
      });
    });

    describe('execution', function() {
      it('is simple just call the function with "()"', function() {
        function coolFunction() {
          return 42;
        }

        var result = coolFunction;

        expect(result).toBe(42);
      });

      it('is simple to pass parameters.', function() {
        function coolFunction() {}

        var param = 'thisParamShouldBeReturned';
        var result = coolFunction;

        expect(result).toBe(param);
      });
    });
  });
})();
