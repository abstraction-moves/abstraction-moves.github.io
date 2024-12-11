let s = null
Display(G)

s = Select(G)
SetVisualForm(s, 'Graph', { directed: false })

s = Select(G.vertices)
Clump(s)
