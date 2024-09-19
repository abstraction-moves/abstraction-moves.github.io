let s = null
Display(Var('G'))

s = Select(G)
SetVisualForm(s, 'Graph', { orientation: 'Vertical', vertical_spacing: 80, horizontal_spacing: 80 })

s = Select(...G.vertices)

for (let i = 0; i < flow.length; i++) {
    let edge = G.edges[i]
    let v1 = G.vertices[edge[0]]
    let v2 = G.vertices[edge[1]]
    let s = Select(v1, v2)
    s = SpanSelection(s)

    LabelEdge(s, flow[i].current + '')

    Remove(s)
}

s = Select(G.vertices[0], G.vertices[1])
// let s2 = Select(G.vertices[1])
s = SpanSelection(s)
Style(s, {
    stroke: 'red',
})
