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

  find() {

  }
}