let s = null
Display(T)

s = Select(T)
SetVisualForm(s, 'Tree', { trim_leaves: true })

s = SelectNodes(T)
Clump(s)

s = Select(T, T.left, T.left.right, T.left.right.right)
Fragment(s)

Label(s[0], 'successor', { placement: 'right', push_layout: false })

Label(s[3], 'node')
