let s = null
Display(Var('G'))

s = Select(G)
Revisualize(s, 'Graph', { directed: false })

s = Select(G.vertices.slice(0, -1))
s = SpanSelection(s)
Style(s, {
    stroke: 'blue',
})

Clear(s)
