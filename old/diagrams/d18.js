let n = 5
let main_diag = [...new Array(n + 1)].map((_, i) => i)
let sup_diag = [...new Array(n)].map((_, i) => i + n)
let sub_diag = [...new Array(n)].map((_, i) => i + 2 * n)
