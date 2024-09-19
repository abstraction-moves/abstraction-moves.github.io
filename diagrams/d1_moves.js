let s = null
Display(graph)

s = Select(graph)
SetVisualForm(s, 'Graph')

s = SelectNodes(graph)
Clump(s, { scale: 0.5 })
Style(s, { background: 'black' })

s = Select(graph.vertices[2], graph.vertices[3], graph.vertices[4])
s = SpanSelection(s)
EncircleBackground(s)
Remove(s)
