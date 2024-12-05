// Construct a matrix with zeros and then diags
let M = []
for (let i = 0; i <= n; i++) {
    M[i] = []

    for (let j = 0; j <= n; j++) {
        M[i][j] = 0

        if (j == i) M[i][j] = main_diag[i]
        if (j == i - 1) M[i][j] = sub_diag[i - 1]
        if (j == i + 1) M[i][j] = sup_diag[i]
    }
}

// Show
let s = null
Display(M)

s = Select(M)
Revisualize(s, 'Grid')

// s = Select(main_diag)
// Hide(s)
// LabelLocation(s, (s) => `di(${s})`, {
//     coordinates: main_diag,
//     range: [0, Var('n')],
//     align: 'left'
// })

// s = Select(sub_diag)
// Hide(s)
// LabelLocation(s, (s) => `su(${s})`, {
//     coordinates: sub_diag,
//     range: [0, Var('n')],
//     align: 'left'
// })

// s = Select(sup_diag)
// Hide(s)
// LabelLocation(s, (s) => `su(${s})`, {
//     coordinates: sup_diag,
//     range: [0, Var('n')],
//     align: 'left'
// })
