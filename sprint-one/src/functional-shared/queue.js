var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
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
    }                                 // 0: x, 1:y
    var result = this[this.start]; // start result = 0: x
    delete this[this.start++]; //1:y -- > 1
    this.length -= 1;
    return result;
  },

  size : function() {
    return this.length;
  },
};


// var a = Queue() // {size : 0}
// a.enqueue('x');
// a.enqueue('y');
// a // {size: 2, 0 : x, 1 : y}
// a.dequeue() // a = {size : 1, 1: y }
// a.size() // 2 *should be 1