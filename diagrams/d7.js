// Note: We use 16 bit division as an illustrative case.

// Number of bits
let n = 16 // Must be a multiple of 8

let a = Math.floor(Math.random() * 2 ** 8)
let b = Math.floor(Math.random() * 2 ** 6)
let d = Math.floor(a / b)

let a_bin = (a >>> 0)
    .toString(2)
    .padStart(n, '0')
    .split('')
    .map((v) => parseInt(v))

let b_bin = (b >>> 0)
    .toString(2)
    .padStart(n, '0')
    .split('')
    .map((v) => parseInt(v))

let d_bin = (d >>> 0)
    .toString(2)
    .padStart(n, '0')
    .split('')
    .map((v) => parseInt(v))
