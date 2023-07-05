/* eslint-disable require-jsdoc */
'use Strict';
import {LinkedListNode} from './Node.js';
export class LinkedList {
  constructor(node) {
    this.node = node;
  }
  append(value) {
    let node = this.node;
    if (this.node.value === null) {
      node.value = value;
    } else {
      while (node.next !== null) {
        node = node.next;
      }
      node.next = new LinkedListNode(value);
    }
  }
}
