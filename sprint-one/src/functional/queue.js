'potato'
var Queue = function() {
  var someInstance = {};
  var start = 0;
  var end = 0;
  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(values) {
    someInstance[end++] = values;
    size += 1;
  };

  someInstance.dequeue = function() {
    if (size === 0) {
      return null;
    }
    var result = someInstance[start];
    delete someInstance[start++];
    size -= 1;
    return result;
  };

  someInstance.size = function() {
    return size;
  };
  return someInstance;
};
