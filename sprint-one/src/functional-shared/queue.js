var Queue = function() {
  var instance = {
    start: 0,
    end: 0,
    length: 0,
  };
  _.extend(instance,queueMethods);
  return instance;
};

var queueMethods = {
  enqueue : function(values) {
    this[this.end++] = values;
    this.length += 1;
  },

  dequeue : function() {
    if (this.length === 0) {
      return null;
    }
    var result = this[this.start];
    delete this[this.start++];
    this.length -= 1;
    return result;
  },

  size : function() {
    return this.length;
  },
};
