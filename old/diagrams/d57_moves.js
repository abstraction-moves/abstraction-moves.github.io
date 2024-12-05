let s = null
Display(L)

s = Select(L)
SetVisualForm(s, 'Sequence', { style: 'Space Separated', margin: 0 })

s = Select(L.slice(0, 2))
Hide(s)
Label(s, 'x')

s = Select(L.slice(2, 7))
Hide(s)
Label(s, '3')

s = Select(L.slice(7))
Hide(s)
Label(s, '2')

Remove(s)
