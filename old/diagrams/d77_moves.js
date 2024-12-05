let s = null
Display(T)

s = Select(T)
SetVisualForm(s, 'Tree')

s = SelectNodes(T)
SetVisualForm(s, 'Hierarchy', { style: 'Bordered' })

Remove(s)
