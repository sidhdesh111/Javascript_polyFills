// Create my own Call

const obj = {
  name: "sidhdesh",
  father: "Vasudev Krishna (Narayan)",
};

function get_details(witness) {
  //     console.log(
  //     `${this.name} is a son of ${this.father} and its witness is ${witness}`
  //   );
  return `${this.name} is a son of ${this.father} and its witness is ${witness}`;
}

// console.log(get_details.call(obj, "Bholenath"));

Function.prototype.my_call = function (context = {}, ...arg) {
  if (typeof this !== "function") {
    throw error("this is not a function");
  }

  context.fn = this;
  const result = context.fn(...arg);
  return result;
};

// get_details.my_call(obj, "Bholenath");
console.log(get_details.my_call(obj, "Bholenath"));
