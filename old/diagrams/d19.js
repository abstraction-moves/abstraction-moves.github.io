let n = 10

let L = [...new Array(n)].map((_) => undefined)
let str = 'crepe'
L.splice(0, str.length, ...str.split(''))

let stackTop = str.length
