let s = null
Display(L)

s = Select(L)
SetVisualForm(s, 'Graph', { pointer_graph: true, orientation: 'Horizontal' })

s = Select(L)
SetVisualForm(s, 'Sequence', { style: 'Blocks' })

s = Select(...L)
SetVisualForm(s, 'Sequence', { style: 'Blocks', orientation: 'Vertical' })

s = Select(...L, { resolve_pointers: false })
LabelLocation(s, { placement: 'top', show_braces: false })

Display(L2)
s = Select(L2)
SetVisualForm(s, 'Graph', { pointer_graph: true, orientation: 'Horizontal' })

s = Select(L2)
SetVisualForm(s, 'Sequence', { style: 'Blocks' })

s = Select(...L2)
SetVisualForm(s, 'Sequence', { style: 'Blocks', orientation: 'Vertical' })

s = Select(L2[k], { resolve_pointers: false })
s = InvertSelection(s)
Clump(s)

s = Select(...L2[k])
s = SpanSelection(s)
Clump(s)
