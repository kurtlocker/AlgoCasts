// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  add(record) {
    this.stack1.push(record);
  }

  remove() {
    if (this.stack2.peek()) {
      return this.stack2.pop();
    }
    while (this.stack1.peek()) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();
  }

  peek() {
    while (this.stack1.peek()) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.peek();
  }
}

// 1 add
//     x
//    |_| |_|

// 2 add
//     y
//     x
//    |_| |_|

// 3 remove => x
//         x
//         y
//    |_| |_|

// 4 add
//     x   y
//    |_| |_|

module.exports = Queue;
