// Create an Polyfills of Maps
// Array.map((ele, index, arr) => {});
Array.prototype.My_map = function (callBack) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(callBack(this[i], i, this));
  }

  return temp;
};

const new_arr = [1, 2, 3, 4, 5];

const result_arr = new_arr.My_map((ele) => {
  return ele * 3;
});


console.log(result_arr);