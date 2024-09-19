let n = 4
let M = [
    [0, 0, 1, 1],
    [0, 0, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
]

let i_row = 1
let i_col = 1

let G = {
    vertices: [...M.flat()],
    edges: [],
}

for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - 1; j++) {
        G.edges.push([i - 1 + n * j, i + n * j + n - 1])
    }
}
