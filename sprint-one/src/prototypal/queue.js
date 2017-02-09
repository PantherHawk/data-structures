var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.start = 0;
  instance.end = 0;
  instance.length = 0;

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function (values) {
  this[this.end++] = values;
  this.length += 1;
};

queueMethods.dequeue = function (values) {
  if (this.length === 0) {
    return null;
  }
  var result = this[this.start];
  delete this[this.start++];
  this.length -= 1;
  return result;
};

queueMethods.size = function () {
  return this.length;
};

