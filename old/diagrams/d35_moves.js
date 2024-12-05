let s = null
Display(list)

s = Select(list)
SetVisualForm(s, 'Graph', { pointer_graph: true, show_labels: false })

s = Select(nodes.map((n) => n.val))
Clump(s)
Label(s, 'val')

s = Select(nodes.slice(1, 4))
Fragment(s)

const mid = Math.floor(nodes.length / 2)
s = Select(nodes[mid])
Label(s, 'Element e')
