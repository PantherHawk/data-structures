var Stack = function() {
  var someInstance = {};
  var size = 0;

  // Use an object with numeric keys to store values {1: virstvalue, 2: secondvalue}
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[size++] = value; //object['a'] = 1 ... {a : 1
  };

  someInstance.pop = function(value) {
    if (size === 0) {
      return null;
    }
    var result = someInstance[--size];
    delete someInstance[size];
    return result; // someInstance[2] = 'b'
  };

  someInstance.size = function() {
    return size;
  };
  return someInstance;
};

// use object key as length of array