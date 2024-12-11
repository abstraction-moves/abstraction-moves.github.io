let s = null
Display(L)

s = Select(L)
SetVisualForm(s, 'Sequence', { style: 'Blocks' })

s = PartitionSelection(s, 2)
Clump(s)

Label(s[0], 'x')
Label(s[1], 'y')

Display(L2)

s = Select(L2)
SetVisualForm(s, 'Sequence', { style: 'Blocks' })

s = Select(...L2)
Hide(s)

Remove(s)
