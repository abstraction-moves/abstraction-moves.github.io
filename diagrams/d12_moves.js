let s = null
let layout = [tree_a, tree_b]
Display(layout)

s = Select(layout)
SetVisualForm(s, 'Sequence', { style: 'Space Separated', margin: 80 })

s = Select(tree_a, tree_b)
SetVisualForm(s, 'Tree', { trim_leaves: true })

s = SelectNodes(tree_a)
Clump(s)

s = SelectNodes(tree_b)
Clump(s)

// Label x and y
s = Select(tree_a.right, tree_b.right.right)
Label(s, 'y')
Label(s, '7', { placement: 'right', push_layout: false })

s = Select(tree_a.right.left, tree_b.right)
Label(s, 'x')
Label(s, '5', { placement: 'right', push_layout: false })

// Clump sub trees
s = SelectSubtree(tree_a.right.left.left)
Clump(s)
Label(s, 'A', { placement: 'inline' })

s = SelectSubtree(tree_b.right.left)
Clump(s)
Label(s, 'A', { placement: 'inline' })

s = SelectSubtree(tree_a.right.left.right)
Clump(s)
Label(s, 'B', { placement: 'inline' })

s = SelectSubtree(tree_b.right.right.left)
Clump(s)
Label(s, 'B', { placement: 'inline' })

s = SelectSubtree(tree_a.right.right)
Clump(s)
Label(s, 'C', { placement: 'inline' })

s = SelectSubtree(tree_b.right.right.right)
Clump(s)
Label(s, 'C', { placement: 'inline' })

s = SelectSubtree(tree_a.right)
Fragment(s)

s = SelectSubtree(tree_b.right)
Fragment(s)

s = SelectSubtree(tree_a)
let s2 = SelectSubtree(tree_b)

Connect(s, s2)
Connect(s2, s)

Remove(s)
Remove(s2)
