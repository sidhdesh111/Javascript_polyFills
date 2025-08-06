// Create own reduce Function
// Array.reduce((acc, curr, i, arr) => {}, initialValue);

Array.prototype.My_reduce = function (callBack, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator
      ? callBack(accumulator, this[i], i, this)
      : this[i];
  }

  return accumulator;
};

const new_ARR = [1, 2, 3, 4, 5];

const result = new_ARR.My_reduce((acc, crr) => {
    return acc + crr
}, 0);

console.log(result);

