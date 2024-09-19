let n = 4
let m = 6

let B = [...Array(m * n)].map((_) => Math.floor(Math.random() * 2))

// Grid view
let B2 = []
for (let i = 0; i < m; i++) {
    B2.push(B.slice(i, i + n))
}
