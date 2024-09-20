let s = null
Display(Var('G'))
s = Select(G)
SetVisualForm(s, 'Graph', { vertical_margin: 80, horizontal_margin: 80 })

s = Select(...G.vertices)
Clump(s)

s = Select(G.vertices[0])
Label(s, 's')

s = Select(G.vertices[G.vertices.length - 1])
Label(s, 't')

s = Select(G.vertices[0], G.vertices[1], G.vertices[3])
s = SpanSelection(s)
LabelEdge(s, 'x')

s = Select(G.vertices[0], G.vertices[2], G.vertices[3])
s = SpanSelection(s)
LabelEdge(s, 'x')

s = Select(G.vertices[1], G.vertices[2])
s = SpanSelection(s)
LabelEdge(s, '1')
