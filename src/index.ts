'use strict';

import { LinkedList } from './LinkedList';
import { LinkedListNode } from './Node';

const newList = new LinkedList(new LinkedListNode());
console.log(newList);
newList.append(42);
console.log(newList);
