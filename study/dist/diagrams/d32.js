let G = {
    vertices: ['s', 'u', 'v', 't'],
    edges: [
        [0, 2],
        [0, 1],
        [1, 2],
        [1, 3],
        [2, 3],
    ],
}

const flow = [
    { current: 15, max: 20 },
    { current: 5, max: 10 },
    { current: 10, max: 30 },
    { current: 0, max: 10 },
    { current: 20, max: 20 },
]
