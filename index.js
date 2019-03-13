function myAnimal() {
  var animal = "dog";
  return animal;
}

function yourAnimal() {
  var animal = "cat";
  return animal;
}

const two = 2;
function add2(n) {
  return n + two
}

var funkyFunction = function outsideFunction((())) {
  var theFunk = funkyFunction;
  return function insideFunction() {
    return "FUNKY!";
  };
};
