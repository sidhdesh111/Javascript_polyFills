// Create your own Bind

const obj = {
  name: "sidhdesh",
  father: "Shree Hari Narayan",
  mother: "Maa Laxmi",
};

function get_details(Badhe_papa, badhe_maa) {
  return `${this.name} is a Son of ${this.father} ${this.mother} and its witness are ${Badhe_papa}ji and ${badhe_maa}`;
}

// const result = get_details.bind(obj, "Mahadev", "Maa Sati");

// console.log(result());

Function.prototype.my_bind = function (context = {}, ...arg) {
  if (typeof this !== "function") {
    throw Error("this is not bindable");
  }

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...arg, ...newArgs);
  };
};

result = get_details.bind(obj, "Mahadev", "Maa Sati");
console.log(result());
