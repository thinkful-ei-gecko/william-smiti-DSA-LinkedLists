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
  //SLL.remove('squirrel');
  SLL.insertBefore('Boomer', 'Athena');
  SLL.insertAfter('Helo', 'Hotdog');
  SLL.insertAt(3, 'Kat');
  SLL.remove('Tauhida');  
  return SLL;
}


function display(linklist){ 
  return JSON.stringify(linklist);
}

console.log(display(main()));


function size(linklist){
  let currNode = linklist.head;
  let pos = 0;
  while(currNode !== null){
    currNode = currNode.next;
    pos++;
  }
  return pos;
}

//console.log(size(main()));

function isEmpty(linklist){
  let currNode = linklist.head;
  if(currNode === null){
    return true;
  }
  return false;

}

//console.log(isEmpty(main()));

function findPrevious(linklist, node){
  let currNode = linklist.head;
  let prevNode = linklist.head;
  
  while((currNode !== null)&&(prevNode.value !== node)){
    prevNode  = currNode;
    currNode = currNode.next;
  }
  
  //console.log(JSON.stringify(prevNode), JSON.stringify(currNode))
  return prevNode.value;
}
//console.log(findPrevious(main(), 'Boomer'));

function findLast(linklist){
  let currNode = linklist.head;
  let prevNode = linklist.head;
  while(currNode !== null){
    prevNode = currNode;
    currNode = currNode.next;
  }
  return prevNode;
}

//console.log(findLast(main()));

//4.
//The problem that the function is trying solve is eliminate the dulicates in the linked list.
//The time complexity is O(n) because it has iterate over each n node to compares the current values
//with the next values until meets its condition.

// function reverseList(linkedList){    
//   let currNode = linkedList.head;
//   let newtail = null;                 
//   let afterNode = currNode.next;

//   while(currNode !== null){
//      newtail = currNode; //head
//      currNode
//   }
// }

function thirdFromLast(linkedlist) {
  let currNode = linkedlist.head;
  let size = 0;
  while(currNode !== null) {
    currNode = currNode.next;
    size++;
  }

  let thirdFromLast = size - 3;
  let counter = 0;
  let tempNode = linkedlist.head;
  while(tempNode !== null) {
    tempNode = tempNode.next;
    counter++;
    if(counter === thirdFromLast) {
      return tempNode;
    }
  }
}

//console.log(JSON.stringify(thirdFromLast(main())));


function middleOfthelist(linkedList){
  let currNode = linkedList.head;
  let newNode = currNode.next
  while(newNode !== null){
    //currNode = currNode.next;
    newNode = newNode.next.next;
    return JSON.stringify(newNode.value);
   
  } 
  
  
}

console.log(middleOfthelist(main()));