//Create my own Apply method

const obj = {
  name: "sidhdesh",
  father: "Shree Hari Narayan",
  mother: "Maa Laxmi",
};

function get_details(Badhe_papa, badhe_maa) {
  return `${this.name} is a Son of ${this.father} ${this.mother} and its witness are ${Badhe_papa}ji and ${badhe_maa}`;
}

// console.log(get_details.apply(obj, ["Mahadev", "Maa Sati"]));

Function.prototype.My_apply = function (context = {}, args) {
  if (typeof this != "function") {
    throw Error(this + "this is not a function");
  }

  context.fn = this;
  result = context.fn(...args);
  return result;
};
console.log(get_details.My_apply(obj, ["Mahadev", "Maa Sati"]))