var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains  = function(item) {
  if (item in this._storage) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  if (item in this._storage) {
    result = this._storage[item];
    delete this._storage[item];
    return result;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 setPrototype.add(item) has O(1).
 setPrototype.contains has O(n).
 setPrototype.remove has O(n).
 */
