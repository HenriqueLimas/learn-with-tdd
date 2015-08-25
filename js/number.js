(function() {
  /**
   * Creating numbers inside JavaScript.
   *   Goals: Make all the tests pass.
   *
   * NOTE: You must leave the expected unchanged!
   *
   * Need some helps? Go to mdn:
   *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
   */

  'use strict';

  describe('Number:', function() {
    describe('creation:', function() {
      it('is simple to create as assing a number into variable.', function() {
        var number;

        expect(number).toEqual(jasmine.any(Number));
      });
    });

    describe('Constructor', function() {
      it('has MAX_VALUE property that is the largest positive representation number.', function() {
        var maxValue = Number;

        expect(maxValue).toBeGreaterThan(100000);
      });

      it('has MIN_VALUE property that is the smallest positive representation number greater than 0.', function() {
        var minValue = Number;

        expect(minValue).toBeGreaterThan(0);
      });

      it('has a special NaN (Not a number) value.', function() {
        var notANumber = 42;

        expect(notANumber).toBeNaN();
      });

      it('"Not a number" is a Number ;P', function() {
        var notANumber = Number;
        expect(typeof notANumber).toBe('number');
      });

      it('has a special property NEGATIVE_INFINITY.', function() {
        var negativeInfinity = Number;

        expect(negativeInfinity).toBeLessThan(0);
      });

      it('has a special property POSITIVE_INFINITY.', function() {
        var positiveInfinity = Number;

        expect(positiveInfinity).toBeGreaterThan(0);
      });
    });
  });
})();
