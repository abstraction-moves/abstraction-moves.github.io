let A = [...new Array(4)].map((_) => Math.floor(Math.random() * 10))
let B = [...new Array(4)].map((_) => Math.floor(Math.random() * 10))
let C = [...A, ...B]

// Indices
let j = 2
let a = 0
let b = C.length - 2
