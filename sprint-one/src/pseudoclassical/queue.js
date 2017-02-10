var Queue = function(start, end, length) {
  this.start = 0;
  this.end = 0;
  this.length = 0;
};

Queue.prototype.enqueue = function (values) {
  this[this.end++] = values;
  this.length += 1;
};

Queue.prototype.dequeue = function (values) {
  if (this.length === 0) {
    return null;
  }
  var result = this[this.start];
  delete this[this.start++];
  this.length -= 1;
  return result;
};

Queue.prototype.size = function () {
  return this.length;
};

var Instance = new Queue();
