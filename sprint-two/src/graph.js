// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};
  //{node1: [edge1, edge2], node2:[edge3, edge4],.....}
   //{2:[e1, e2], 3:[e3, e4]}

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
  return this.nodes;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; ++i) {
    if (this.nodes[i] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes.length; ++i) {
    if (this.nodes[i] === node) {
      this.nodes.pop(node);
    }
  }
  for (var k = 0; k < this.edges.length; k++) {
    if (this.edges[k][0] === node || this.edges[k][1] === node) {
      this.edges.splice(this.edges[k], 1);
    }
  }
  return this.nodes;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.

//ip: two nodes.
//op: true/false.

//iterate through keys...
  // if has one node...
    // iterate through found node's connections.
    // find seconde node in connection array.
      // if found does the other key have the same set up? recursive step.
Graph.prototype.hasEdge = function(fromNode, toNode) { //{edges : [[2, 3]], nodes : [2, 3]}
  for (var i = 0; i < this.edges.length; i++) {
    if ((this.edges[i][0] === fromNode && this.edges[i][1] === toNode) || (this.edges[i][1] === fromNode && this.edges[i][0] === toNode)){
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
// ip: two nodes
// op: puts one node in the other's array and visa versa.

// find the node in the graph...
  // is the other node already in the connection array?
    // yes :
    // no: push the other node into the connection array.
  //

  // edges = [[1,3] = edges[0], [2, 4].....]
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === fromNode) {
      for (var j = 0; j < this.nodes.length; j++) {
        if (this.nodes[j] === toNode) {
          this.edges.push([toNode, fromNode]);
        }
      }
    }
  }
  return this.edges;
};

// nodes = [3, 5]  edges= [[3, 5] ]
// Remove an edge between any two specified (by value) nodes.  {fromnode : [tonode,...,n]}
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; ++i) {
    if ((this.edges[i][0] === fromNode && this.edges[i][1] === toNode) || (this.edges[i][1] === fromNode && this.edges[i][0] === toNode)) {
      this.edges.splice(this.edges[i], 1);
    }
  }
  return this.edges;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(function(node) {
    return cb(node);
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

var someGraph = new Graph ();
