var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
  	start: 0,
  	end: 0,
  	size: 0,
  };
  _.extend(instance,queueMethods);

};

var queueMethods = {};

v

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