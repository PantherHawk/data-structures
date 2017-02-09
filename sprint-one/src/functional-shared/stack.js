var Stack = function() {

  var someInstance = {
    length: 0,
  };
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this[this.length++] = value;
  }, //object['a'] = 1 ... {a : 1}

  pop: function(value) {
    if (this.length === 0) {
      return null;
    }
    var result = this[--this.length];
    delete this[this.length];
    return result; // someInstance[2] = 'b'
  },

  size: function() {
    return this.length;
  },
};