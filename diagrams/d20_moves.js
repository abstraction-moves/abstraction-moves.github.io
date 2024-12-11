let rows = data.map((d) => Object.values(d))

let rows_flat = []

for (let i = 0; i < rows.length; i++) {
    rows_flat.push(...rows[i])
}

let cols = []
for (let j = 0; j < rows[0].length; j++) {
    cols[j] = []
}

for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows[i].length; j++) {
        cols[j][i] = rows[i][j]
    }
}

let s = null

Display(Var('data'))
Display(rows_flat)
Display(cols)

s = Select(data)
SetVisualForm(s, 'Grid')

s = Select(cols)
SetVisualForm(s, 'Sequence', { style: 'Space Separated' })

s = Select(rows_flat, ...cols)
SetVisualForm(s, 'Sequence', { style: 'Blocks' })

s = Select(data.slice(3))
s = SpanSelection(s)

Abbreviate(s)

s = Select(data)
Label(s, 'conceptual', { placement: 'top' })

s = Select(rows_flat)
Label(s, 'row-major storage', { placement: 'top' })

s = Select(cols)
Label(s, 'column-major storage', { placement: 'top' })

Remove(s)
