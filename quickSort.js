pry = require('pryjs')

const quickSort= (arr) =>{
  if (arr.length <= 1) {
    return arr;
  } else {
    let less = [], greater = [];
    let p = arr.pop();
    for (i = 0; i < arr.length; i++) {
      if (arr[i] < p ? less.push(arr[i]) : greater.push(arr[i]));
    }
    lower = quickSort(less)
    upper = quickSort(greater)
    return lower.concat([p], upper);
  }
}

module.exports = quickSort;
