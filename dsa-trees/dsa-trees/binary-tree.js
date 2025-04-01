/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    function minDepthFinder(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return minDepthFinder(node.right) + 1;
      if (node.right === null) return minDepthFinder(node.left) + 1;
      return (
        Math.min(minDepthFinder(node.left), minDepthFinder(node.right)) + 1
      );
    }

    return minDepthFinder(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    function maxDepthFinder(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return maxDepthFinder(node.right) + 1;
      if (node.right === null) return maxDepthFinder(node.left) + 1;
      return (
        Math.max(maxDepthFinder(node.left), maxDepthFinder(node.right)) + 1
      );
    }

    return maxDepthFinder(this.root);
  }
  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0;

    function maxSumFinder(node) {
      if (node === null) return 0;
      const leftSum = maxSumFinder(node.left);
      const rightSum = maxSumFinder(node.right);
      result = Math.max(result, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    maxSumFinder(this.root);
    return result;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let count = null
    const toBeCounted = [this.root]
    while (toBeCounted.length) {
      const current = toBeCounted.shift();
      if (current != null) {
        if (current.val > lowerBound) {
          if (!count || current.val <= count) {
            count = current.val
          }
        }
        if (current.left) {
          toBeCounted.push(current.left);
        }
        if (current.right) {
          toBeCounted.push(current.right);
        }
      }
    }
    return count
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    if (node1 === this.root || node2 === this.root) return false;

    function findLevelAndParent(
      nodeToFind,
      currentNode,
      level = 0,
      data = { level: 0, parent: null }
    ) {
      if (data.parent) return data;
      if (currentNode.left === nodeToFind || currentNode.right === nodeToFind) {
        data.level = level + 1;
        data.parent = currentNode;
      }
      if (currentNode.left) {
        findLevelAndParent(nodeToFind, currentNode.left, level + 1, data);
      }
      if (currentNode.right) {
        findLevelAndParent(nodeToFind, currentNode.right, level + 1, data);
      }
      return data;
    }

    let node1Info = findLevelAndParent(node1, this.root);
    let node2Info = findLevelAndParent(node2, this.root);

    let sameLevel =
      node1Info && node2Info && node1Info.level === node2Info.level;
    let differentParents =
      node1Info && node2Info && node1Info.parent !== node2Info.parent;
    return sameLevel && differentParents;
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize(tree) {
    const nodes = [];
    function traverse(node) {
      if (node) {
        nodes.push(node.val);
        traverse(node.left);
        traverse(node.right);
      } else { nodes.push('null'); }
    }
    traverse(tree.root);
    return nodes.join(", ")
  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize(serial) {
    if (!serial) return null;
    const nodes = serial.split(", ")
    function rebuildTree() {
      if (nodes.length) {
        const currentNode = nodes.shift();
        if (currentNode === 'null') return null;
        let newNode = new BinaryTreeNode(+currentNode);
        newNode.left = rebuildTree();
        newNode.right = rebuildTree();
        return newNode;
      }
    }
    const treeRoot = rebuildTree();
    return new BinaryTree(treeRoot)
  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2, currentNode = this.root) {
    if (currentNode === null) return null;

    if (currentNode === node1 || currentNode === node2) return currentNode;

    const left = this.lowestCommonAncestor(node1, node2, currentNode.left);
    const right = this.lowestCommonAncestor(node1, node2, currentNode.right);

    if (left !== null && right !== null) return currentNode;

    if (left !== null || right !== null) return left || right;

    if (left === null && right === null) return null;
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
