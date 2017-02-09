var Queue = function() {
  var someInstance = {};
  var start = 0;
  var end = 0;
  var size = 0;

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
