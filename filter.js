//Create an Filter polyfills

// Array.filter((ele, index, arr) => {});

Array.prototype.My_filter = function (callBack) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (callBack(this[i], i, this)) {
      temp.push(this[i]);
    }
  }

  return temp;
};

const new_arr = [1, 2, 3, 4, 5];

const result_arr = new_arr.My_filter((ele, index) => {
  return ele > 2;
});

console.log(result_arr);
