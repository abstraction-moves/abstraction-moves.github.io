let n = 8
let A = [...new Array(n)].map((_, i) => get_value(i * 2 - 1))
let B = [...new Array(n)].map((_, i) => get_value(i * 2))

function get_value(i) {
    return Math.floor(Math.abs(Math.sin(i) * 20))
}

A.sort()
B.sort()

let merged = []

let i = 0
let j = 0

while (i < A.length && j < B.length) {
    let ai = A[i]
    let bi = B[j]

    if (ai <= bi) {
        merged.push(ai)
        i++
    } else {
        merged.push(bi)
        j++
    }

    // Stop it manually
    if (i > n / 2 || j > n / 2) {
        break
    }
}

let Merge = {
    vertices: [A, B, merged],
    edges: [
        [0, 2],
        [1, 2],
    ],
}
