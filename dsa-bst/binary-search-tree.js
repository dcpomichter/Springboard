class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this
    }
    let toBeTraversed = [this.root];
    while (toBeTraversed.length) {
      const current = toBeTraversed.shift();
      if (val > current.val) {
        if (current.right === null) {
          current.right = new Node(val)
          return this
        } else { toBeTraversed.push(current.right) }
      }
      if (val < current.val) {
        if (current.left === null) {
          current.left = new Node(val)
          return this
        } else { toBeTraversed.push(current.left) }
      }
    }
  };

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    if (val > current.val) {
      if (current.right === null) {
        current.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.right);
    } else {
      if (current.left === null) {
        current.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.left);
    }
  };

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (this.root === null) return undefined
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.val === val) return currentNode;
      currentNode = currentNode.val > val ? currentNode.left : currentNode.right
    }
    return undefined
  };

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {
    if (this.root === null) return undefined;

    if (currentNode.val === val) return currentNode;

    if (currentNode.val > val) {
      if (currentNode.left === null) return undefined
      return this.findRecursively(val, currentNode.left)
    } else if (currentNode.val < val) {
      if (currentNode.right === null) return undefined
      return this.findRecursively(val, currentNode.right)
    }
  };

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const visitedNodes = [];
    let currentNode = this.root

    function traverse(node) {
      visitedNodes.push(node.val)
      if (node.left) { traverse(node.left); }
      if (node.right) { traverse(node.right) }
    }
    traverse(currentNode)
    return visitedNodes
  };

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root) {
    const visitedNodes = [];
    let currentNode = this.root

    function traverse(node) {
      if (node.left) { traverse(node.left); }
      visitedNodes.push(node.val)
      if (node.right) { traverse(node.right) }
    }
    traverse(currentNode)
    return visitedNodes
  };

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root) {
    const visitedNodes = [];
    let currentNode = this.root

    function traverse(node) {
      if (node.left) { traverse(node.left); }
      if (node.right) { traverse(node.right) }
      visitedNodes.push(node.val)
    }
    traverse(currentNode)
    return visitedNodes
  };

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const toBeVisited = [this.root]
    const visitedNodes = [];
    while (toBeVisited.length) {
      currentNode = toBeVisited.shift()
      visitedNodes.push(currentNode)
      if (currentNode.left) {
        toBeVisited.push(currentNode.left)
      }
      if (currentNode.right) {
        toBeVisited.push(currentNode.right)
      }
    }
    return visitedNodes
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val, currentNode = this.root, parent = null) {
    while (currentNode.val !== val) {
      parent = currentNode;
      if (val > currentNode.val) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left
      }
    }
    if (currentNode !== this.root) {
      if (currentNode.left === null && currentNode.right === null) {
        if (parent.right === currentNode) {
          parent.right = null;
        } else {
          parent.left = null;
        }
      } else if (currentNode.left !== null && currentNode.right !== null) {
        let rightParent = currentNode;
        let right = currentNode.right;
        if (right.left === null) {
          right.left = currentNode.left;
          if (parent.left === currentNode) {
            parent.left = right;
          } else {
            parent.right = right;
          }
        } else {
          while (right.left !== null) {
            rightParent = right;
            right = right.left
          }
          if (parent.left === currentNode) {
            parent.left.val = right.val
          } else {
            parent.right.val = right.val
          }
          if (right.right !== null) {
            rightParent.left = right.right;
          } else {
            rightParent.left = null
          }
        }
      } else {
        if (parent.left === currentNode) {
          if (currentNode.left === null) {
            parent.left = currentNode.right
          } else {
            parent.left = currentNode.left
          }
        } else {
          if (currentNode.left === null) {
            parent.right = currentNode.right
          } else {
            parent.right = currentNode.left
          }
        }
      }
    }
    return currentNode
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced(current = this.root) {
    if (current === null) return;

    function maxDepthHelper(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return maxDepthHelper(node.right) + 1;
      if (node.right === null) return maxDepthHelper(node.left) + 1;
      return (
        Math.max(maxDepthHelper(node.left), maxDepthHelper(node.right)) + 1
      );
    }
    const leftDepth = Math.max(maxDepthHelper(current.left), 1);
    const rightDepth = Math.max(maxDepthHelper(current.right), 1);
    if (leftDepth === rightDepth || leftDepth + 1 === rightDepth || leftDepth - 1 === rightDepth) {
      return true
    }
    return false
  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest(current = this.root) {
    if (!this.root || (!this.root.left && !this.root.right)) return;
    while (current) {
      if (current.left && !current.right) {
        return this.findSecondHighest(current.left);
      }
      if (current.right && (!current.right.left && !current.right.right)) {
        return current.val
      }
      current = current.right
    }
  }
}

module.exports = BinarySearchTree;
