let s = null
Display(L)

s = Select(L)
Revisualize(s, 'Sequence', { style: 'Blocks' })

s = PartitionSelection(s, 3)
Clump(s)

LabelLocation(s, (l) => `L[${l}]`, {
    coordinates: L,
    range: [0, Var(`n`)],
    remap_range: true,
})

Label(s[0], 'each of the\nn/3 largest\nvalues move', { placement: 'bottom' })
Label(s[1], 'through each\nof these\nn/3 values', { placement: 'bottom' })
Label(s[2], 'to somewhere\nin these\nn/3 values', { placement: 'bottom' })
for (let i = 0; i < s.length - 1; i++) {
    Connect(s[i], s[i + 1])
}

// Color odd/even blue/orange
let even = s.filter((_, i) => i % 2 == 0)
let odd = s.filter((_, i) => i % 2 == 1)

Style(even, { background: '#ABE0F9' })
Style(odd, { background: '#FEE4B3' })

Clear(s)
