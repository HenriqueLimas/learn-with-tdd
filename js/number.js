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

      it('converts a string into a number value.', function() {
        var numberString = '42';

        var assert = Number;

        expect(assert).toBe(42);
      });
    });

    describe('instances methods', function() {
      describe('toExponential([fractionDigits])', function() {
        it('returns a string representing the number in exponential notation.', function() {
          var number = 42;

          var assert = number; // call method here.

          expect(assert).toBe('4.2e+1');
        });
      });

      describe('toFixed([digits])', function() {
        it('returns a string representing the number in fixed-point notation.', function() {
          var number = 42.42;
          var digits = 3;

          var assert = number; // call method here.

          expect(assert).toBe('42.420');
        });
      });

      describe('toLocaleString([locale] [, option])', function() {
        it('returns a string with a language sensitive representation of the number.', function() {
          var number = 1234.42;
          var locale = 'en-US';

          var assert = number; // call method here;

          expect(assert).toBe('1,234.42');
        });

        it('can returns a specified string currency using option.', function() {
          var number = 1234.42;
          var locale = 'ja-JP'
          var option =  { // syntax to create an object. (See object lesson.);
            style: 'currency',
            currency: 'JPY'
          };

          var assert = number; // call method here;

          expect(assert).toBe('￥1,234.42');
        });
      });

      describe('toPrecision([precision])', function() {
        it('returns a string representing fixed-point or exponential notation rounded to a precision', function() {
          var number = 42.421234;
          var precision = 4;

          var assert = number; // call method here.

          expect(assert).toBe('42.42');
        });
      });

      describe('toString([radix])', function() {
        it('returns a string representing the number.', function() {
          var number = 42;
          var radix = 2; // An integer specifyng the base to use for representing numeric values.

          var assert = number; // call method here.

          expect(assert).toBe('101010');
        });
      });

      describe('valueOf()', function() {
        it('returns the primitive value of the number.', function() {
          var number = new Number(42);

          var assert = number;

          expect(assert).toBe(42);
        });
      });
    });
  });
})();
