// Linked List

const Node = class {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

const LinkedList = class {
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

      this.length++
      return this
    }

    this.tail.next = node
    this.tail = node
    this.length++
    return this
  } // O(1)

  pop() {
    if (this.length <= 0) {
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
    const node = new Node(data)

    if (!this.length) {
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
    if (index < 0 || !this.length || index >= this.length) {
      return undefined
    }

    let temp = this.head
    let loopCount = 0

    while (loopCount < index) {
      loopCount++
      temp = temp.next
    }

    return temp
  } // O(n)

  set(index, data) {
    const indexData = this.get(index)

    if (indexData) {
      indexData.data = data
      return true
    }

    return false
  } // O(n)

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

      this.length++

      return true
    }

    return undefined
  } // O(n)

  reverse() {
    let temp = this.head
    this.head = this.tail
    this.tail = temp
    let next = temp.next
    let prev = null

    for (let i = 0; i < this.length; i++) {
      next = temp.next
      temp.next = prev
      prev = temp
      temp = next
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

    let temp = this.head
    let next = this.head.next

    for (let i = 0; i < index - 1; i++) {
      temp = temp.next
      next = temp.next
    }

    temp.next = next.next

    this.length--

    return next
  } // O(n)
}

const linkedListOne = new LinkedList(1)
linkedListOne.push(2)
linkedListOne.push(3)

console.dir(linkedListOne)
