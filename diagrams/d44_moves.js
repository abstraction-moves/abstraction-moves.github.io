let s = null
Display(Var('G'))

s = Select(G)
SetVisualForm(s, 'Graph', { orientation: 'Vertical' })

s = Select(G.vertices)
Clump(s)

for (let i = 0; i < G.vertices.length; i++) {
    s = Select(G.vertices[i])
    Label(s, G.vertices[i], { placement: 'top', show_braces: false })
    Label(s, times[i][0] + '/' + times[i][1])
}

for (let i = 0; i < connected.length; i++) {
    let nodes = connected[i].map((j) => G.vertices[j])
    s = Select(nodes)
    s = SpanSelection(s)
    EncircleBackground(s)
}

Remove(s)
