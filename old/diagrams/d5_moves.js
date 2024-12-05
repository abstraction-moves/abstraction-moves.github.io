let s = null
Display(tree)

s = Select(tree)
SetVisualForm(s, 'Tree', { trim_leaves: true })

s = SelectNodes(tree)
Clump(s)

let l = tree.right.right

s = Select(l, l.left, l.right)
s = SpanSelection(s)

Style(s, {
    'stroke-dasharray': '3 5',
})

s = Select(l)
Label(s, 'New merged letter with sum of frequencies', { placement: 'right', push_layout: false })

s = Select(l.left, l.right)
Label(s, 'Two lowest-frequency letters', { placement: 'right', push_layout: false, individual: true })

Remove(s)
