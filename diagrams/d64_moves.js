let s = null
Display(tree)

s = Select(tree)
SetVisualForm(s, 'Tree')

s = SelectNodes(tree)
Clump(s)
Style(s, { background: '#fee4b3' })

s = SelectByValue(tree, (v) => v == null)
Label(s, 'NIL')
Style(s, { background: 'white', border: 'none' })

s = Select(tree, tree.left, tree.right, tree.right.right, tree.right.left)
Fragment(s)

Label(s[0], 'z', { placement: 'right', push_layout: false, show_braces: false })
Style(s[0], { background: '#abe0f9' })

Label(s[1], 'l', { placement: 'left', push_layout: false, show_braces: false })

Label(s[2], 'y', { placement: 'right', push_layout: false, show_braces: false })
Style(s[2], { background: '#f58220' })

Label(s[3], 'x', { placement: 'right', push_layout: false, show_braces: false })

Remove(s)
