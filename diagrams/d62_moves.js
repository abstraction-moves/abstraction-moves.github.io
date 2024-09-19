let s = null
Display(G)

s = Select(G)
SetVisualForm(s, 'Graph')

s = Select(G.vertices)
Clump(s)

s = Select(G.vertices[2], G.vertices[3])
Fragment(s)

s = Select(G.vertices[2])
Label(s, 'v_in')

s = Select(G.vertices[3])
Label(s, 'v_out')

s = Select(G.vertices[2], G.vertices[3])
s = SpanSelection(s)
LabelEdge(s, 'c')

EncircleBackground(s)
Label(s, 'vertex\ngadget', { placement: 'right' })
