let s = null
Display(tree)

s = Select(tree)
SetVisualForm(s, 'Tree', { trim_leaves: true, horizontal_margin: 10, show_labels: false })

s = Select(tree.right, tree.right.left, tree.right.right)
s = SpanSelection(s)
EncircleBackground(s)
Label(s, 'w', { placement: 'right' })
Remove(s)
