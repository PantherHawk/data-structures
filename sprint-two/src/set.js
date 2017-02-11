var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage[item] = item;
};

setPrototype.contains = function(item) {
  for (var key in this.storage) {
    if (this.storage[item] !== undefined)
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  result = this.storage[item];
  delete this.storage[item];
  return result;
};

var newSet = new Set()

/*
 * Complexity: What is the time complexity of the above functions?
 */
