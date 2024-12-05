let n1 = 229
let n2 = 64

let result = 229 % 64

let b1 = to_binary_array(n1)
let b2 = to_binary_array(n2)

let b_result = to_binary_array(result)

function to_binary_array(n) {
    return n
        .toString(2)
        .padStart(8, '0')
        .split('')
        .map((i) => parseInt(i))
}
