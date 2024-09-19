// Construct a matrix with zeros and then diags
let M = []
for (let i = 0; i < n; i++) {
    M[i] = []

    for (let j = 0; j < n; j++) {
        M[i][j] = 0

        if (j == i) M[i][j] = main_diag[i]
        if (j == i - 1) M[i][j] = sub_diag[i - 1]
        if (j == i + 1) M[i][j] = sup_diag[i]
    }
}

// Show
Display(Var('M'), { visual: 'Matrix' })

let s = Select(main_diag)
Hide(s)
LabelLocation(s, {
    coordinates: main_diag,
    format: (s) => `di(${s})`,
    placement: 'inline',
})

// s = ContiguousSelect(sub_diag)
// Hide(s)
// LabelLocation(s, {
//     coordinates: sub_diag,
//     format: (s) => `su(${s})`,
//     placement: 'inline',
// })

// s = ContiguousSelect(sup_diag)
// Hide(s)
// LabelLocation(s, {
//     coordinates: sup_diag,
//     format: (s) => `su(${s})`,
//     placement: 'inline',
// })

// s = ContiguousSelect(M.slice(2, n - 2))
// Abbreviate(s)

// let Cs = []
// for (let i = 0; i < n; i++) {
//     Cs.push(M[i].slice(2, n - 2))
// }

// s = ContiguousSelect(Cs)
// Abbreviate(s)
