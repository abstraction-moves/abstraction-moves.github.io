let u = 8
let m = 4

let U = [...Array(u)].map((_) => ({ data: Math.floor(10 * Math.random()) }))
let M = [...Array(m)].map((_) => [])

function hash(i) {
    return i % m
}

for (let i = 0; i < U.length; i++) {
    M[hash(i)].push(U[i])
}

let a = 1
let b = a + m
