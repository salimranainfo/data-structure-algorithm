// Linked List

const Node = class {
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

const DoublyLinkedList = class {
  constructor(data) {
    if (data) {
      this.head = new Node(data)
      this.tail = this.head
      this.length = 1
    } else {
      this.head = null
      this.tail = null
      this.length = 0
    }
  }

  push(data) {
    const node = new Node(data)

    if (!this.head) {
      this.head = node
      this.tail = this.head

      this.length = 1

      return this
    }

    const temp = this.tail
    this.tail.next = node
    this.tail = node
    node.prev = temp
    this.length++
    return this
  } // O(1)

  pop() {
    if (this.length === 0) {
      return undefined
    }

    let temp = this.head.next
    let prev = this.head

    if (this.length === 1) {
      temp = this.head

      this.head = null
      this.tail = null

      this.length--

      return temp
    }

    while (temp.next) {
      prev = temp
      temp = temp.next
    }

    prev.next = null
    this.tail = prev

    this.length--

    return temp
  } // O(n)

  unshift(data) {
    if (!data) {
      return undefined
    }

    const node = new Node(data)

    if (!this.head) {
      this.head = node
      this.tail = this.head

      this.length = 1

      return this
    }

    node.next = this.head
    this.head = node

    this.length++

    return this
  } // O(1)

  shift() {
    if (!this.length) {
      return undefined
    }

    const temp = this.head

    if (this.length === 1) {
      this.head = null
      this.tail = null

      this.length--

      return temp
    }

    this.head = temp.next
    temp.next = null

    this.length--

    return temp
  } // O(1)

  get(index) {
    if (index === undefined || index < 0 || !this.length || index >= this.length) {
      return undefined
    }

    let temp = this.head

    if (index < this.length / 2) {
      for (let i = 0; i <= index; i++) {
        if (i !== 0) {
          temp = temp.next
        }
      }
    } else {
      temp = this.tail

      for (let i = this.length - 1; i >= index; i--) {
        if (i !== this.length - 1) {
          temp = temp.prev
        }
      }
    }

    return temp
  } // O(log n)

  set(index, data) {
    const indexData = this.get(index)

    if (indexData) {
      indexData.data = data
      return true
    }

    return false
  } // O(log n)

  insert(index, data) {
    if (index < 0 || (this.length && index >= this.length)) {
      return false
    }

    if ((index === 0 && !this.length) || index === this.length - 1) {
      const res = this.push(data)

      return res ? true : false
    }

    const indexData = this.get(index)

    if (indexData) {
      const node = new Node(data)

      const after = indexData.next
      indexData.next = node
      node.next = after
      node.prev = indexData

      this.length++

      return true
    }

    return undefined
  } // O(log n)

  reverse() {
    let temp = null
    let current = this.head
    this.head = this.tail
    this.tail = current

    for (let i = 0; i < this.length; i++) {
      if (current) {
        temp = current.prev
        current.prev = current.next
        current.next = temp
        current = current.prev
      }
    }

    if (temp) {
      this.head = temp.prev
    }

    return this
  } // O(n)

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined
    }

    if (index === 0) {
      return this.shift()
    }

    if (index === this.length - 1) {
      return this.pop()
    }

    const node = this.get(index)

    if (node) {
      const before = node.prev
      const after = node.next

      before.next = after
      after.prev = before

      this.length--
    }

    return node
  } // O(log n)
}

const linkedListOne = new LinkedList(1)
linkedListOne.push(2)
linkedListOne.push(3)

console.dir(linkedListOne)
