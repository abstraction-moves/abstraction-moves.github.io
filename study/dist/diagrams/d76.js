let field1_arr = [1, 1, 0, 1, 0, 0]
let field2_arr = [1, 1, 1, 1, 0, 0]

let field1 = parseInt(field1_arr.join(''), 2)
let field2 = parseInt(field2_arr.join(''), 2)

let sum = field1 + field2
let sum_arr = (sum >>> 0)
    .toString(2)
    .split('')
    .map((v) => parseInt(v))

let leftover = [sum_arr[0]]

let result = parseInt(sum_arr.slice(1).join(''), 2) + parseInt(leftover.join(''), 2)
let result_arr = (result >>> 0)
    .toString(2)
    .split('')
    .map((v) => parseInt(v))
