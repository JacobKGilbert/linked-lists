/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val)

    if(!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }

    this.length += 1
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newHead = new Node(val)

    if (!this.head) {
      this.head = newHead
      this.tail = newHead
    } else {
      newHead.next = this.head
      this.head = newHead
    }

    this.length += 1
  }

  /** pop(): return & remove last item. */

  pop() {
    let currNode = this.head
    let lastNode = this.tail

    if (currNode === lastNode) {
      this.head = null
      this.tail = null
      this.length -= 1
      return currNode.val
    }

    while (currNode.next) {
      if (currNode.next === this.tail) {
        currNode.next = null
        this.tail = currNode
      } else {
        currNode = currNode.next
      }
    }

    this.length -= 1

    return lastNode.val
  }

  /** shift(): return & remove first item. */

  shift() {
    let originalHead = this.head

    if (this.head === this.tail) {
      this.head = null
      this.tail = null
      this.length -= 1
      return originalHead.val
    }

    this.head = originalHead.next
    this.length -= 1

    return originalHead.val
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currNode = this.head

    if (idx === 0) {
      return currNode.val
    }

    for (let i = 0; i <= idx; i++) {
      if (currNode.next) {
        currNode = currNode.next
      }
    }

    return currNode.val
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currNode = this.head

    if (idx === 0) {
      currNode.val = val
    }

    for (let i = 0; i <= idx; i++) {
      if (currNode.next) {
        currNode = currNode.next
      }
    }

    currNode.val = val
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const newNode = new Node(val)
    let currNode = this.head
    let lastNode = this.tail

    if(!this.head) {
      this.head = newNode
      this.tail = newNode
      this.length += 1
      return
    }

    if (idx === 0) {
      newNode.next = currNode
      this.head = newNode
      this.length += 1
      return
    }

    if (idx === this.length) {
      lastNode.next = newNode
      this.tail = newNode
      this.length += 1
      return
    }

    for (let i = 0; i <= idx - 2; i++) {
      if (currNode.next) {
        currNode = currNode.next
      }
    }

    newNode.next = currNode.next
    currNode.next = newNode
    this.length += 1
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let currNode = this.head

    if(!this.head) return

    if (idx === 0) {
      if (this.head === this.tail) {
        this.head = null
        this.tail = null
      } else {
        this.head = currNode.next
      }
      this.length -= 1
      return currNode.val
    }

    for (let i = 0; i <= idx - 2; i++) {
      if (currNode.next) {
        currNode = currNode.next
      }
    }

    currNode.next = currNode.next.next
    this.length -= 1
    return currNode.val
  }

  /** average(): return an average of all values in the list */

  average() {
    let currNode = this.head
    let total = 0

    if (this.head === null) {
      return total
    }

    while (currNode) {
      total += currNode.val
      currNode = currNode.next
    }
    
    return total / this.length
  }
}

module.exports = LinkedList;
