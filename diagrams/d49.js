let l1 = {
    key: 'bagel',
    value: 3.25,
    next: null,
}

l1.next = {
    key: 'jam',
    value: 0.85,
    next: null,
}

let l2 = {
    key: 'migas',
    value: 3.25,
}

let buckets = [...Array(8)].map((v) => null)
buckets[2] = l1
buckets[5] = l2
