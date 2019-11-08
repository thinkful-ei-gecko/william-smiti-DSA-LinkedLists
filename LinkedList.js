class _Node {
  constructor(value,next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(value) {
    this.head = new _Node(value, this.head);
  }

  insertLast(value) {
    if(this.head === null) {
      this.insertFirst(value);
    }
    let tempNode = this.head;
    while(tempNode.next !== null) {
      tempNode = tempNode.next;
    }
    tempNode.next = new _Node(value, null);
  }

  remove(value) {
    if(!this.head) {
      return null;
    }
    if(this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let prevNode = this.head;
    while((currNode !== null) && (currNode.value !== value)) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null) {
      console.log('Item not found');
      return;
    }
    prevNode.next = currNode.next;
  }

  find(value) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== value) {
      if (currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  insertBefore(findValue, insertValue) {
    if(!this.head) {
      return null;
    }

    let currNode = this.head;
    let prevNode = this.head;

    while((currNode !== null) && (currNode.value !== findValue)) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    let newNode = new _Node(insertValue, currNode);
    prevNode.next = newNode;
  }

  insertAfter(findValue, insertValue) {
    if(!this.head) {
      return null;
    }

    let currNode = this.head;
    let prevNode = this.head;
    while((currNode !== null) && (prevNode.value !== findValue)) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    let newNode = new _Node(insertValue, currNode);
    prevNode.next = newNode;
  }

  insertAt(positionNumber, insertValue) {
    if(!this.head) {
      return null;
    }

    let currNode = this.head;
    let prevNode = this.head;
    let position = 0;

    while((currNode !== null) && (position !== positionNumber)) {
      prevNode = currNode;
      currNode = currNode.next;
      position++;
    }

    let newNode = new _Node(insertValue,currNode);
    prevNode.next = newNode;
  }
}

function main() {
  let SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  // SLL.remove('squirrel');
  SLL.insertBefore('Boomer', 'Athena');
  SLL.insertAfter('Helo', 'Hotdog');
  SLL.insertAt(3, 'Kat');
  SLL.remove('Tauhida');  
  return SLL;
}


// QUESTION 3
function display(linkList){ 
  return JSON.stringify(linkList);
}
// console.log(display(main()));

function size(linkList){
  let currNode = linkList.head;
  let pos = 0;
  while(currNode !== null){
    currNode = currNode.next;
    pos++;
  }
  return pos;
}
//console.log(size(main()));

function isEmpty(linkList){
  let currNode = linkList.head;
  if(currNode === null){
    return true;
  }
  return false;
}
//console.log(isEmpty(main()));

function findPrevious(linkList, value) {
  let prevNode = linkList.head;
  let currNode = linkList.head;
  while((currNode !== null) && (currNode.value !== value)) {
    prevNode = currNode;
    currNode = currNode.next;
  }
  return prevNode;
}
// console.log(findPrevious(main(), 'Starbuck'));

function findLast(linkList) {
  let currNode = linkList.head;
  while(currNode.next !== null) {
    currNode = currNode.next;
  }
  return currNode;
}
// console.log(findLast(main()));


//4.
//The problem that the function is trying solve is eliminate the dulicates in the linked list.
// The time complexity is O(n^2) because it has a nested while loop.


//5. Reverse a List
function reverseList(linkList) {
  let currNode = linkList.head;
  let prevNode = null;
  let nextNode;

  while(currNode !== null) {
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  return prevNode;
}
// console.log(reverseList(main()));

//6. 3rd from the end
function thirdFromLast(linkList) {
  let currNode = linkList.head;
  while(currNode.next.next.next !== null) {
    currNode = currNode.next;
  }
  return currNode;
}
// console.log(thirdFromLast(main()));

//7. Middle of a list
function middleOfList(linkedList) {
  let nextNode = linkedList.head;
  let currNode = linkedList.head;

  while((nextNode !== null) && (nextNode.next !== null)) {
    nextNode = nextNode.next.next;
    currNode = currNode.next;
  }
  return currNode;
}
// console.log(middleOfList(main()));

//8. Cycle in a list
function cycleList(linkList) {
  let fastPointer = linkList.head.next;
  let slowPointer = linkList.head;
  while(fastPointer !== null && fastPointer.next !== null && slowPointer !== null) {
    if(fastPointer === slowPointer) {
      return true;
    }
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
  }
  return false;
}
// console.log(cycleList(main()));