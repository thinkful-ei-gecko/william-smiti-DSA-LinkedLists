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
    if(!this.head) {
      return null;
    }
    let tempNode = this.head;
    while((tempNode.next !== null) && (tempNode.value !== value)) {
      tempNode = tempNode.next;
    }
    if(tempNode === null) {
      console.log('Item not found');
      return;
    }
    return tempNode;
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

  insertAt()
}

function main() {
  let SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  console.log(SLL);

  SLL.remove('squirrel');
  console.log(SLL);
}
main();