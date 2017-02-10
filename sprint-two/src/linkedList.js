var LinkedList = function() { //LinkedList()
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // HEAD        TAIL
    //   A --> B --> C
    // HEAD        TAIL
    //   A --> B --> C     D
    var newnode = Node(value);
    //if head is empty
    if (list.head === null) {
      this.head = newnode; // new Node(value);
      this.tail = newnode;
    } else {
      // HEAD        TAIL
      //   A --> B --> C --> D
      this.tail.next = newnode;
      // HEAD               TAIL
      //   A --> B --> C --> D
      this.tail = newnode;
    }
  };

  list.removeHead = function() {
    if (this.head === null) {
      return null;
    }
    var removed = this.head.value;
    this.head = this.head.next;
    return removed;
  };

  list.contains = function(target) {
    for (var node = this.head; node !== null; node = node.next) {
      if (node.value === target) {
        return true;
      }
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
