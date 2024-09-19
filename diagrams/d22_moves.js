let s = null
Display(Var('nodes'))
Display(Var('T'))

s = Select(nodes)
SetVisualForm(s, 'Sequence', { style: 'Space Separated' })

s = Select(T)
SetVisualForm(s, 'Tree')

s = Select(...nodes)
LabelLocation(s, { coordinates: nodes, show_braces: false })

s = Select(nodes[0])
Style(s, { background: '#e9eab8' })

s = Select(nodes[1])
Style(s, { background: '#ffbbf4' })

s = SelectSubtree(T.right.right)
s = SpanSelection(s)
EncircleBackground(s)

s = SelectSubtree(T.right.left)
s = SpanSelection(s)
EncircleBackground(s)

Remove(s)
