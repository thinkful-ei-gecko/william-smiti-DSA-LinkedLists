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
  SLL.remove('squirrel');
  SLL.insertBefore('Boomer', 'Athena');
  SLL.insertAfter('Helo', 'Hotdog');
  SLL.insertAt(3, 'Kat');
  SLL.remove('Tauhida');
  console.log(JSON.stringify(SLL));
}
main();