'use strict';
import {LinkedList} from './LinkedList.js';
const newList = new LinkedList();
newList.append(42);
newList.append(88);
newList.prepend('deine Mutter');
// console.log(newList);
// newList.pop();
// newList.pop();
// newList.pop();
// newList.prepend(42);
newList.removeAt(4);
console.log(newList);
