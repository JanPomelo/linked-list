'use strict';
import {LinkedList} from './LinkedList.js';
import {Node} from './Node.js';
const newList = new LinkedList(new Node());
newList.append(42);
newList.append(88);
newList.prepend('deine Mutter');
console.log(newList);
