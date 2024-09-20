let s = null
Display(left_tree)

s = Select(left_tree)
SetVisualForm(s, 'Tree', { trim_leaves: true })

s = SelectNodes(left_tree)
Clump(s)

s = SelectSubtree(left_tree.left)
Clump(s)

s = SelectSubtree(left_tree.right)
Clump(s)

s = Select(left_tree)
Label(s, 'item')
Label(s, 'node', { placement: 'top' })

let layout = [right_tree, list]
Display(layout)

s = Select(layout)
SetVisualForm(s, 'Sequence', { style: 'Space Separated', orientation: 'Vertical' })

s = Select(right_tree)
SetVisualForm(s, 'Tree', { trim_leaves: true, horizontal_margin: 25 })
SetVisualForm(Select(list), 'Sequence', { style: 'Blocks' })

s = SelectNodes(right_tree)
Clump(s)

s = Select(...list)
Clump(s)

s = Select(right_tree)
let s2 = Select(list[Math.floor(list.length / 2)])
Connect(s, s2)
