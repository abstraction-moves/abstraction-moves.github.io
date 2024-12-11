let s = null
Display(G)

s = Select(G)
Revisualize(s, 'Graph', { directed: false })

s = Select(G.vertices)
Clump(s)
