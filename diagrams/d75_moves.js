let layout = [tree, L]
let s = null
Display(layout)

s = Select(layout)
SetVisualForm(s, 'Sequence', { style: 'Space Separated', orientation: 'Vertical', margin: 100 })

s = Select(tree)
SetVisualForm(s, 'Tree', { horizontal_spacing: 0, show_labels: false })

s = Select(L)
SetVisualForm(s, 'Sequence', { style: 'Blocks' })

let s2 = null
for (let i = 0; i < 3; i++) {
    s = Select(L[i])
    s2 = Select(L[i * 2 + 1])
    Connect(s, s2)

    s2 = Select(L[i * 2 + 2])
    Connect(s, s2)
}
