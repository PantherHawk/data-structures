var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // null should be an empty array. {0 : Bob, children : [],}

  return newTree;
};

var treeMethods = {};

treeMethods.addChild  = function (value) {
  var child = Tree(value);
  this.children.push(child);
};

// ip : target value
// op : true or false

// if no children, is this the target?
  // yes, return true, done.
// if children, does some element match the target? some(this.chilren, function(child))
  // yes, true, done.
  // no, run the function on the child. child.contains(target)

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    if (child.contains(target)){
      return true;
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


