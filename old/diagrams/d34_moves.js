let s = null
Display(Var('tree'))

s = Select(tree)
SetVisualForm(s, 'Tree', { trim_leaves: true })

s = SelectNodes(tree)
Clump(s)
Style(s, {
    background: '#fee4b3',
})

s = SelectSubtree(tree)
Label(s, 'height=' + h, { placement: 'left' })

let node = tree
let d = 0

while (node != null) {
    s = Select(node)
    Label(s, 'depth ' + d, { placement: 'right', push_layout: false, show_braces: false })
    node = node.right
    d++
}

Remove(s)
