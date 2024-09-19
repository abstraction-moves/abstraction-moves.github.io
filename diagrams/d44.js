let G = {
    vertices: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
    edges: [
        [0, 1],
        [4, 5],
        [1, 2],
        [5, 6],
        [2, 3],
        [6, 7],
        [4, 0],
        [3, 7],
        [1, 4],
        [6, 5],
        [3, 2],
        [7, 7],
    ],
}

// [discovery, finish] times of each vertex
let times = [
    [13, 41],
    [11, 16],
    [1, 10],
    [8, 9],
    [12, 15],
    [3, 4],
    [2, 7],
    [5, 6],
]

// Strongly connected components (indices of vertices)
let connected = [[0, 1, 4], [5, 6], [2, 3], [7]]
