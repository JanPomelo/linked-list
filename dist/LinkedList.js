/* eslint-disable require-jsdoc */
'use Strict';
import {Node} from './Node.js';
export class LinkedList {
  constructor() {
    this.node = null;
  }
  append(value) {
    let node = this.node;
    if (node) {
      if (this.node.value === null) {
        node.value = value;
      } else {
        while (node.next !== null) {
          node = node.next;
        }
        node.next = new Node(value);
      }
    } else {
      this.node = new Node(value);
    }
  }
  prepend(value) {
    if (this.node) {
      const node = new Node(this.node.value, this.node.next);
      this.node.value = value;
      this.node.next = node;
    } else {
      this.node = new Node(value);
    }
  }

  size() {
    if (this.node === null) return 0;
    let numOfNodes = 1;
    let node = this.node;
    while (node.next) {
      numOfNodes++;
      node = node.next;
    }
    return numOfNodes;
  }

  head() {
    return this.node;
  }

  tail() {
    if (!this.node) {
      return 'List is empty';
    }
    let node = this.node;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  at(index) {
    let node = this.node;
    if (index === 0) {
      return node;
    }
    for (let i = 0; i < index; i++) {
      if (node) {
        node = node.next;
      } else {
        return null;
      }
    }
    return node;
  }

  pop() {
    let node = this.node;
    if (node.next === null) {
      this.node = null;
      return;
    }
    while (node.next.next) {
      node = node.next;
    }
    node.next = null;
  }

  contains(value) {
    if (this.node === null) {
      return false;
    }
    let node = this.node;
    while (node.next) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }
    if (node.value === value) {
      return true;
    }
    return false;
  }

  find(value) {
    if (!this.node) {
      return null;
    }
    let index = 0;
    let node = this.node;
    while (node.next) {
      if (node.value === value) {
        return index;
      }
      index++;
      node = node.next;
    }
    if (node.value === value) {
      return index;
    }
    return null;
  }

  toString() {
    if (!this.node) {
      return null;
    }
    let node = this.node;
    let result = node.value.toString();
    while (node.next) {
      result = result + ' -> ' + node.next.value.toString();
      node = node.next;
    }
    result = result + ' -> ' + node.next;
    return result;
  }

  insertAt(value, index) {
    if (!this.node) {
      this.node = new Node(value);
      return;
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    let node = this.node;
    for (let i = 1; i < index; i++) {
      if (node.next) {
        node = node.next;
      } else {
        this.append(value);
        return;
      }
    }
    const nextNode = node.next;
    node.next = new Node(value, nextNode);
    return;
  }

  removeAt(index) {
    if (!this.node) {
      return 'List is empty';
    }
    let node = this.node;
    if (index === 0) {
      if (node.next) {
        this.node = node.next;
      }
    }

    for (let i = 1; i < index; i++) {
      if (node.next) {
        node = node.next;
      } else {
        // eslint-disable-next-line max-len
        const err = new Error('index is out of bound! Maximum index is ' + (i - 1));
        console.log(err);
        return;
      }
    }
    let nextnext = null;
    if (node.next) {
      if (node.next.next) {
        nextnext = node.next.next;
      }
      node.next = nextnext;
      return;
    }
    const err = new Error('index is out of bound! Maximum index is ' + (i - 1));
    console.log(err);
    return;
  }
}
