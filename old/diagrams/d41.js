let G = {
    vertices: [],
    edges: [],
}

let N = 8
let n = 4

for (let i = 0; i < N; i++) {
    G.vertices.push(i)
    G.edges.push([i - 1, i])
}
