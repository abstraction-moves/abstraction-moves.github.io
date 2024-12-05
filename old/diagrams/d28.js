let n = 9
let M = [...new Array(n)].map((_, i) => (Math.sin(i + 5) > 0 ? 2 : 0))
let D = [...new Array(n)].map((_, i) => (Math.cos(i) > 0.7 ? 4 : 0))
let R = [...new Array(n)].map((_, i) => M[i] + D[i])
