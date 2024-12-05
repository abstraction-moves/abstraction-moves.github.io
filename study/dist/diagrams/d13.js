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

const ll = new LinkedList()
let n = 5

for (let i = 0; i <= n; i++) {
    ll.insertFirst(i)
}

let nodes = []
let first = ll.head

while (first != null) {
    nodes.push(first)
    first = first.next
}
