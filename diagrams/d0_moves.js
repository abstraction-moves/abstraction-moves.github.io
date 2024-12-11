Display(Var('L'))

let s = Select(L)
SetVisualForm(s, 'Sequence', {
    style: 'Blocks',
})

let m = 4

s = PartitionSelection(s, m)
Clump(s)

LabelLocation(s, {
    coordinates: L,
    // range: [0, Var('n')],
    // remap_range: true
})

for (let i = 0; i < m - 1; i++) {
    Connect(s[i], s[i + 1])
}
