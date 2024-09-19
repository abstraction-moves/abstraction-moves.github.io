let s = null
let s2 = null
let layout = [[other, input], output]

Display(layout)

s = Select(layout)
SetVisualForm(s, 'Sequence', { style: 'Space Separated', margin: 100 })

SetVisualForm(Select(layout[0]), 'Sequence', { style: 'Space Separated', orientation: 'Vertical' })
SetVisualForm(Select(other, input, output), 'Sequence', { style: 'Space Separated' })

s = Select(...other, ...input, ...output)
Clump(s)

s = Select(...output)
s = SpanSelection(s)
Label(s, 'O[p]')

s = Select(...input)
s = SpanSelection(s)
Label(s, 'I[p]')

s = Select(...other, ...input)
LabelIdentifier(s)

s = Select(y)
s2 = Select(output)
Connect(s, s2)

s = Select(p)
Connect(s, s2)

Remove(s2)
Remove(s)
