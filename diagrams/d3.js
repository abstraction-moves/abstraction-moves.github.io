let u = 20
let m = 8

let U = [...Array(u)].map((_) => ({ data: Math.floor(10 * Math.random()) }))
let M = [...Array(m)].map((_) => [])

function hash(i) {
    return i % m
}

for (let i = 0; i < U.length; i++) {
    M[hash(i)].push(U[i])
}

let a = 4
let b = a + m
