let s = null
Display(Var('G'))

s = Select(G)
SetVisualForm(s, 'Graph', { orientation: 'Vertical' })

s = Select(G.vertices)
Clump(s)

s = Select(G.vertices.slice(n))
s = SpanSelection(s)
Abbreviate(s)

s = Select(G.vertices.slice(0, n))
s = SpanSelection(s)
Label(s, '√n')
