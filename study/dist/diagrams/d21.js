let B = ['B', 'A', 'B', 'A', 'B', 'D', 'B', 'C', 'A', 'D', 'A', 'C', 'D', 'A']
let A = ['A', 'B', 'C', 'D', 'A']

let i = -1
let indices = []

for (let ai = 0; ai < A.length; ai++) {
    i = B.indexOf(A[ai], i + 1)
    if (i == -1) {
        break
    }
    indices.push([ai, i])
}
