let s = null
Display(Var('G'))

s = Select(G)
SetVisualForm(s, 'Graph', { directed: false })

s = Select(G.vertices.slice(0, -1))
s = SpanSelection(s)
Style(s, {
    stroke: 'blue',
})

Remove(s)
