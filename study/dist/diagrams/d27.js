// "JS Linked List Class" by Brad Traversy
// https://gist.github.com/bradtraversy/c38f029e5f9e56a19c393d3a3b1e1544

// Construct Single Node
class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

// Create/Get/Remove Nodes From Linked List
class LinkedList {
    constructor() {
        this.head = null
        this.len = 0
    }

    // Insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head)
        this.len++
    }

    // Insert last node
    insertLast(data) {
        let node = new Node(data)
        let current

        // If empty, make head
        if (!this.head) {
            this.head = node
        } else {
            current = this.head

            while (current.next) {
                current = current.next
            }

            current.next = node
        }

        this.len++
    }
}

const left = new LinkedList()

for (let i = 0; i <= 5; i++) {
    left.insertFirst(i)
}

const right = new LinkedList()

for (let i = 0; i <= 5; i++) {
    right.insertFirst(i * 2 + 1)
}

const left_flat_head = { ...left }
delete left_flat_head.head

const left_flat = []

let curr_node = left.head
while (curr_node != null) {
    let flat = { ...curr_node }
    delete flat.next
    left_flat.push(flat)
    curr_node = curr_node.next
}

const right_flat_head = { ...right }
delete right_flat_head.head

const right_flat = []

curr_node = right.head
while (curr_node != null) {
    let flat = { ...curr_node }
    delete flat.next
    right_flat.push(flat)
    curr_node = curr_node.next
}
