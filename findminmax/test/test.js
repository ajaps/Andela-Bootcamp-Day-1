(function() {
  'use strict';
  var myApp = require('../app/index.js');

  describe('Min-Max Numbers in a List: ', function () {

        describe('Return invalid input for input that is not an array', function () {

      it('should return invalid input for abc', function () {
        expect(myApp.findMinMax('abc')).toEqual('invalid input - input not an Object');
      });

      it('should return invalid for 123', function () {
        expect(myApp.findMinMax(123)).toEqual('invalid input - input not an Object');
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(myApp.findMinMax({1:1, 'a':6, 'food':'rice'})).toEqual('invalid input - input not an Array');
      });

    });

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(myApp.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(myApp.findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(myApp.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return 0 for []', function () {
        expect(myApp.findMinMax([])).toEqual(0);
      });

      it('should return [-1, -212] for [-1,-11,-2,-212,-19]', function () {
        expect(myApp.findMinMax([1.5,-3.7,2.95,2.94,-1])).toEqual([-3.7, 2.95]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(myApp.findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

     it('should return [-13] for [-13, -13, -13, -13]', function () {
        expect(myApp.findMinMax([-13, -13, -13, -13])).toEqual([-13]);
      });

    });

  });

})();