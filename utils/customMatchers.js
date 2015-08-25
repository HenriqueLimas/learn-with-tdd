(function() {

	'use strict';

	var customMatchers = {
		toBeNaN: function() {
			return {
				compare: function(number) {
					var result = {};

					result.pass = isNaN(number);

					if(result.pass) {
						result.message = 'Expected ' + number + ' to be NaN.';
					} else {
						result.message = 'Expected ' + number + ' to be NaN, but it was a Number.';
					}

					return result;
				}
			}
		}
	};

	beforeEach(function() {
		jasmine.addMatchers(customMatchers);
	});
})();