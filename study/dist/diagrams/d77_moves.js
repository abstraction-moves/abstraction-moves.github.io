let s = null
Display(T)

s = Select(T)
Revisualize(s, 'Tree')

s = SelectNodes(T)
Revisualize(s, 'Hierarchy', { style: 'Bordered' })

Clear(s)
