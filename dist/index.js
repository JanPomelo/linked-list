'use strict';
import {LinkedList} from './LinkedList.js';
import {LinkedListNode} from './Node.js';
const newList = new LinkedList(new LinkedListNode());
console.log(newList);
newList.append(42);
console.log(newList);
newList.append(88);
console.log(newList);
