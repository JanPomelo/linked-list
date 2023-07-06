# linked-list

## Classes

### Node

#### Properties

##### value

the Value of the Node

##### next

the Node which this Node is refering to

### LinkedList

#### Properties

##### node

the first node in the LinkedList

#### Functions

##### append

###### Arguments

none

###### Description

adds a node to the end of the LinkedList

###### Returns

void

##### prepent

###### Arguments

none

###### Description

adds a node to the beginning of the LinkedList

###### Returns

void

##### size

###### Arguments

none

###### Description

returns the size of the LinkedList

###### Returns

size of the LinkedList (number)

##### head

###### Arguments

none

###### Description

returns the first Node of the LinkedList

###### Returns

first Node of the LinkedList (Node)

##### tail

###### Arguments

none

###### Description

returns the last Node of the LinkedList

###### Returns

last Node of the LinkedList (Node)

##### at

###### Arguments

index (number)

###### Description

returns the Node at the given index of the LinkedList.
If the index is out of bound, return null.

###### Returns

null OR Node at the given index of the LinkedList (Node)

##### pop

###### Arguments

none

###### Description

deletes the last Node of the LinkedList. If the LinkedList is empty, simply return

###### Returns

void

##### contains

###### Arguments

value

###### Description

checks if the given value is in the LinkedList or not.

###### Returns

true, if the value is in the LinkedList
false, if the value is not in the LinkedList

##### find

###### Arguments

value

###### Description

checks if the given value is in the LinkedList.

###### Returns

null, if the value is not in the LinkedList
the index of the Node that contains the given value.

##### toString

###### Arguments

none

###### Description

Translates the LinkedList into a String with all its Node values

###### Returns

the List with all its Node Values (String)

##### insertAt

###### Arguments

value,
index

###### Description

inserts a Node with the given value at the index 'index' in the LinkedList. If the index is out of bound, simply append the Node at the end of the LinkedList.

###### Returns

void

##### removeAt

###### Arguments

index

###### Description

Removes the Node at the given index from the LinkedList.
If the index is out of bound, log an ErrorMessage

###### Returns
