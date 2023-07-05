/* eslint-disable require-jsdoc */
'use Strict';
import {Node} from './Node.js';
export class LinkedList {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
  append(value) {
    let node = this;
    if (node.value === null) {
      node.value = value;
    } else {
      while (node.next !== null) {
        node = node.next;
      }
      node.next = new Node(value);
    }
  }
  prepend(value) {
    const node = new Node(this.value, this.next);
    this.value = value;
    this.next = node;
  }
}
