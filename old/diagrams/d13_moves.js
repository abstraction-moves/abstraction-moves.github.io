let s = null
Display(ll)

s = Select(ll)
SetVisualForm(s, 'Graph', { pointer_graph: true, show_labels: false })

s = Select(...nodes.map((n) => n.data))
Hide(s)

s = Select(...nodes)

LabelLocation(s, (i) => `x(${i})`, { coordinates: nodes, range: [0, Var(`n`)] })

s = Select(...nodes.slice(2, -1))
s = SpanSelection(s)
Abbreviate(s)

s = Select(ll.len)
Hide(s)
Label(s, 'len')

s = Select(ll.head, { resolve_pointers: false })
Hide(s)
Label(s, 'head')
