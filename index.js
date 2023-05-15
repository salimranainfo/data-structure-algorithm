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
  }
}
