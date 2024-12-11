let s = null
let s2 = null
let b2b = [B2, B]
Display(b2b)

s = Select(b2b)
Revisualize(s, 'Sequence', { style: 'Space Separated', margin: 100 })

s = Select(B)
Revisualize(s, 'Sequence', { style: 'Blocks' })

s = SpanSelection(Select(...B))
s = PartitionSelection(s, m)

Label(s, 'n')

Label(SpanSelection(s), 'm-groups')

s = Select(B2)
Revisualize(s, 'Grid', { style: 'Bordered' })
Hide(s)

s = SelectByCondition(B2, (v) => v == 1)
Label(s, 'X')

s = Select(B2)
Label(s, 'n bits', { placement: 'top' })
Label(s, 'm bits', { placement: 'left' })

s2 = Select(B)
Connect(s2, s)

Clear(s)
Clear(s2)
