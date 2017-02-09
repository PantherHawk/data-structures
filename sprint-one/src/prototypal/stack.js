var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.length = 0;

  return someInstance;
};

stackMethods = {};

stackMethods.push = function(value)  {
  this[this.length++] = value;
};

stackMethods.pop = function (value) {
  if (this.length === 0) {
    return null;
  }
  var result = this[--this.length];
  delete this[this.length];
  return result;
};

stackMethods.size = function() {
  return this.length;
};

