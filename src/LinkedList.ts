"use Strict";

import { LinkedListNode } from "./Node";

export class LinkedList {
  node: LinkedListNode;
  constructor(node: LinkedListNode) {
    this.node = node;
  }
  append(value: any): void {
    let node: LinkedListNode = this.node;
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
