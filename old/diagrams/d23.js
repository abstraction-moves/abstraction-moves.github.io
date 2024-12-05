let n = 8
let i = 2

let X1 = [...new Array(n)].map((_, i) => i)
let X2 = [...X1.slice(0, i), 5, ...X1.slice(i)]
