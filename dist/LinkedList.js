/* eslint-disable require-jsdoc */
'use Strict';
import {Node} from './Node.js';
export class LinkedList {
  constructor() {
    this.node = new Node();
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
    }
  }
  prepend(value) {
    if (this.node) {
      const node = new Node(this.node.value, this.node.next);
      this.node.value = value;
      this.node.next = node;
    } else {

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
}
