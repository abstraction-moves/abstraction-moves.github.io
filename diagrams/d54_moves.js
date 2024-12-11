let s = null
let grids = states.map((state) => state.map((number) => separateDigits(number)))

Display(grids)

s = Select(grids)
SetVisualForm(s, 'Sequence', { style: 'Space Separated' })

s = Select(...grids)
SetVisualForm(s, 'Grid')

for (let i = 1; i < grids.length; i++) {
    s = Select(grids[i].map((n) => n[n.length - i]))
    s = SpanSelection(s)
    EncircleBackground(s)

    s = Select(grids[i])
    let s2 = Select(grids[i - 1])
    Connect(s2, s)

    Remove(s2)
}

Remove(s)
