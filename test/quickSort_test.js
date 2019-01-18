const assert = require('chai').assert
const quickSort = require('../quickSort')

describe('quickSort', function() {
  it('can sort using quick sort algorithm', function() {
    unsorted = [3,2,5,1,4];
    assert.deepEqual(quickSort(unsorted), [1,2,3,4,5]);
  });
});
