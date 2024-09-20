let s = null
Display(tree)

s = Select(tree)
SetVisualForm(s, 'Tree', { horizontal_margin: 20, vertical_margin: 50 })

s = SelectNodes(tree)
Clump(s, { scale: 1 })

s = Select(tree.right.right.right, tree.left.right.left, tree.left.right.right)
Style(s, {
    borderBottom: '4px solid red',
})

Remove(s)
