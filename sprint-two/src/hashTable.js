var HashTable = function() {
  this._size = 0;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var stack = this._storage.get(index);
  if (stack === undefined) {
    stack = [];
    this._storage.set(index, stack);
  }
  var entry = stack.find(function(entry) {
    return entry.key === k;
  });
  if (entry !== undefined) {
    entry.value = v;
    return;
  }
  stack.push({key: k, value: v});

// bob.get(something)   <-- from LimitedArray
// bob[something]  <-- standard Javascript Array

  this._size++;
};

// does the entry already exist?
  // replace it.

// ip: name of a wine bottle
// op: a wine bottle.
// get magical number of the slot.
// hey storage! Here's a number.
  // does this number have a container?
    // no, undefined.
    // here's that slot.
      // let's look and see if our bottle of wine is in this slot.
        // does this bottle of wine have the right name?
          // return that wine.


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var stack = this._storage.get(index);
  if (stack === undefined) {
    return undefined;
  }
  var entry = stack.find(function(entry) {
    return entry.key === k;
  });
  if (entry !== undefined) {
    return entry.value;
  }
};

// ip: name of a bottle of wine.
// op: the bottle of wine.

// hey get me an index for this.
// oh great, that's that slot.
  // go into that slot and find the bottle with name k.
  // destroy the bottle of wine.

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    return undefined;
  }
  return this._storage.get(index).splice(this._storage.get(index).findIndex(function(entry) {
    return entry.key === k;
  }), 1)[0].value;
};

// HashTable.prototype.superSeien = function()
/*
 * Complexity: What is the time complexity of the above functions?
 O(1)
 */


