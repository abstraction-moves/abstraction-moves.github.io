let s = null
Display(Var('G'))

s = Select(G)
SetVisualForm(s, 'Graph', { directed: false, orientation: 'Vertical' })

s = Select(G.vertices)
Clump(s)

for (let i = 0; i < vertex_cover.length; i++) {
    s = Select(G.vertices[vertex_cover[i]])
    Style(s, {
        background: 'darkgrey',
    })
}

Remove(s)
