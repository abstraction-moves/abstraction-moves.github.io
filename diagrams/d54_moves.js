let s = null
let grids = states.map((state) => state.map((number) => separateDigits(number)))

Display(grids)

s = Select(grids)
Revisualize(s, 'Sequence', { style: 'Space Separated', margin: 60 })

s = Select(...grids)
Revisualize(s, 'Grid')

for (let i = 1; i < grids.length; i++) {
    s = Select(grids[i].map((n) => n[n.length - i]))
    s = SpanSelection(s)
    Encircle(s, { background: '#fee4b3', stroke: '#ca9f63' })

    s = Select(grids[i])
    let s2 = Select(grids[i - 1])
    Connect(s2, s)

    Clear(s2)
}

Clear(s)
