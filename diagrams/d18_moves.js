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

s = Select(main_diag)
Hide(s)
LabelLocation(s, (s) => `dia(${s})`, {
    coordinates: main_diag,
    range: [0, Var('n')],
})

s = Select(sub_diag)
Hide(s)
LabelLocation(s, (s) => `sub(${s})`, {
    coordinates: sub_diag,
    range: [0, Var('n')],
})

s = Select(sup_diag)
Hide(s)
LabelLocation(s, (s) => `sup(${s})`, {
    coordinates: sup_diag,
    range: [0, Var('n')],
})

s = InvertSelection(Select(sup_diag, sub_diag, main_diag))
Hide(s)
Label(s, '0')

s = SelectRows(M, 2, n - 1)
s = SpanSelection(s)
Abbreviate(s)

let n2 = Math.floor(n / 2)
for (let i = 0; i <= n; i++) {
    s = Select(M[i].slice(1, n2))
    Abbreviate(s)

    s = Select(M[i].slice(n2 + 2, -1))
    Abbreviate(s)
}

Clear(s)
