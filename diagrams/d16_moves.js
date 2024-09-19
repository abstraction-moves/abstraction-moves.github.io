let s = null
let s2 = null
let b2b = [B2, B]
Display(b2b)

s = Select(b2b)
SetVisualForm(s, 'Sequence', { style: 'Space Separated', margin: 100 })

s = Select(B)
SetVisualForm(s, 'Sequence', { style: 'Blocks' })

s = SpanSelection(Select(...B))
s = PartitionSelection(s, m)

Label(s, 'n')

Label(SpanSelection(s), 'm-groups')

s = Select(B2)
SetVisualForm(s, 'Grid', { style: 'Bordered' })
Hide(s)

s = SelectByValue(B2, (v) => v == 1)
Label(s, 'X')

s = Select(B2)
Label(s, 'n bits', { placement: 'top' })
Label(s, 'm bits', { placement: 'left' })

s2 = Select(B)
Connect(s2, s)

Remove(s)
Remove(s2)
