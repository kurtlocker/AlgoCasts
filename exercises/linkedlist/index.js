// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while (node && node.next) {
      node = node.next;
    }
    return node;
  }

  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count += 1;
      node = node.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = (this.head && this.head.next) || null;
  }

  removeLast() {
    let node = this.head;
    let previous = node;
    while (node && node.next) {
      previous = node;
      node = node.next;
    }
    if (previous && previous.next) {
      previous.next = null;
    } else {
      this.head = null;
    }
  }

  insertLast(data) {
    const currentLastNode = this.getLast();
    if (currentLastNode) {
      // There are existing nodes
      currentLastNode.next = new Node(data);
    } else {
      // empty
      this.insertFirst(data);
    }
  }

  getAt(index) {
    if (index < 0) {
      return null;
    }
    let node = this.head;
    let counter = 0;
    while (node && node.next && counter !== index) {
      node = node.next;
      counter += 1;
    }
    return index > counter ? null : node;
  }

  removeAt(index) {
    const previous = this.getAt(index - 1);
    const node = this.getAt(index);
    if (previous && node && node.next) {
      // case where we need to connect previous node next ref with node.next
      previous.next = node.next;
    } else if (node && node.next) {
      // Deletes the first node
      this.head = node.next;
    } else if (previous && node && !node.next) {
      // Deletes last node in case we have > 1 element
      previous.next = null;
    } else if (node && !node.next) {
      // Deletes last node in case we have 1 element
      previous.next = null;
    }
  }

  insertAt(data, index) {
    // Beginning Edge cases
    // index < 0 | previous=null
    if (index < 0) {
      return;
    }
    // index=0 | previous=null
    if (index === 0) {
      this.insertFirst(data);
      return;
    }
    let node = this.head;
    let previous = null;
    let size = 0;
    while (node && node.next && index !== size) {
      if (index - size === 1) {
        previous = node;
      }
      node = node.next;
      size += 1;
    }
    // End Edge cases
    // index > size
    //  index=size+1 | previous=last node
    //  index=size+(n>=1) | previous=null
    if (index > size) {
      node.next = new Node(data);
    } else {
      // In between case
      // index > 0 and index <= size | previous=previous node
      previous.next = new Node(data, node);
    }
  }

  forEach(fn) {
    let node = this.head;
    let count = 0;
    while (node) {
      fn(node, count);
      count += 1;
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
