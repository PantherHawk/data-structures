let BinarySearchTree = function(value) {
  let instance = Object.create(binarySearchTreeMethods);
  instance.left = undefined;
  instance.right = undefined;
  instance.value = value;

  return instance;
};




let binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value) {
  if (this.value === undefined) {
    return this.value;
  }
  let branch = BinarySearchTree(value);
  if (value < this.value) {
    if (this.left === undefined) {
      this.left = branch;
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === undefined) {
      this.right = branch;
    } else {
      this.right.insert(value);
    }
  }
};



binarySearchTreeMethods.contains = function(value){

  if (this.value === value) {
    return true;
  }

  if (this.value > value) {
    if (this.left === undefined ) {
      return false;
    }
    return this.left.contains(value);
  } else {
    if (this.right === undefined) {
      return false;
    }
    return this.right.contains(value);
  }
};

//1. ip: callback function.
//   op: what the callback function does to each node in the tree.

//2. var a = BinarySearchTree(5);
    //expect(a.depthFirstLog(function(value) {value === 5})).to.be.true;
// var array = [];
// var func = function(value) { array.push(value); };
// binarySearchTree.insert(5);
// binarySearchTree.insert(2);
// binarySearchTree.insert(3);
// binarySearchTree.depthFirstLog(func);
// expect(array).to.eql([5, 2, 3]);


//3. binary search tree, recursion
//4. return whatever the function returns and go down the tree in both directions.
//5. apply function to root.
  // put left and right branches into array.
  // iterate over with for each.
    // if child us not undefined.
      // run depthFirstLog.
binarySearchTreeMethods.depthFirstLog = function(cb) {
  cb(this.value);
  let branches = [this.left, this.right];
  branches.forEach(function(branch) {
    if (branch !== undefined) {
      branch.depthFirstLog(cb);
    }
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 depthFirstLog: O(n)
 contains: O(log n)
 insert: O(n)
 */

