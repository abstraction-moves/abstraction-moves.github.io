let s = null
Display(L)

s = Select(L)
SetVisualForm(s, 'Sequence', { style: 'Blocks' })

s = PartitionSelection(s, 3)
Clump(s)

LabelLocation(s, (s) => `L[${s}]`, {
    coordinates: L,
    range: [0, Var(`n`)],
    remap_range: true,
})

Label(s[0], 'each of the\nn/3 largest\nvalues move', { placement: 'bottom' })
Label(s[1], 'through each\nof these\nn/3 values', { placement: 'bottom' })
Label(s[2], 'to somewhere\nin these\nn/3 values', { placement: 'bottom' })

Connect(s[0], s[1])
Connect(s[1], s[2])

// Color odd/even blue/orange
let even = s.filter((_, i) => i % 2 == 0)
let odd = s.filter((_, i) => i % 2 == 1)

Style(even, { background: '#ABE0F9' })
Style(odd, { background: '#FEE4B3' })

Remove(s)
