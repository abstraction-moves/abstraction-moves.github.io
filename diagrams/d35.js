class Node {
    constructor(val) {
        this.prev = null
        this.val = val
        this.next = null
    }

    add(val) {
        // Go to end
        let node = this
        while (node.next != null) {
            node = node.next
        }

        node.next = new Node(val)
        node.next.prev = node
    }
}

let list = new Node(0)

for (let i = 1; i < 5; i++) {
    list.add(i)
}

let nodes = []
let node = list
while (node != null) {
    nodes.push(node)
    node = node.next
}
