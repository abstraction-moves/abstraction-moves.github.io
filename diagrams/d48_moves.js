let s = null
Display(Var('L'))

s = Select(L)
SetVisualForm(s, 'Graph', { directed: false })

s = Select(L.vertices[0])
Label(s, 'Top =', { placement: 'left', show_braces: false })

s = Select(L.vertices[L.vertices.length - 1])
Label(s, 'Bottom =', { placement: 'left', show_braces: false })
Remove(s)
