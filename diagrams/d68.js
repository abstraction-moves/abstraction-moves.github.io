const root = {
    value: 1,
    children: [],
}

const node1 = {
    value: 2,
    children: [],
    edge: 'com',
}
root.children.push(node1)

const node2 = {
    value: 3,
    edge: 'google',
}
node1.children.push(node2)

const node3 = {
    value: 4,
    edge: 'example',
}
node1.children.push(node3)
