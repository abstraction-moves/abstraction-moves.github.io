let s = null
Display(G)

s = Select(G)
SetVisualForm(s, 'Graph', { orientation: 'Vertical', vertical_spacing: 10, horizontal_spacing: 100 })

s = SelectNodes(G)
Clump(s)

s = Select(G.vertices.slice(0, 3))
Label(s, 'u', { individual: true, placement: 'left' })

s = Select(G.vertices[3])
Label(s, 'v')
