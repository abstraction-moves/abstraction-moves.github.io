let n = 32
let A = [...new Array(n)].map((_) => 0)
A.splice(1, 12, ...[...new Array(12)].map((_) => 1))
A[A.length - 1] = 1
