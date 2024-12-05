let s = null
Display(root)

s = Select(root)
SetVisualForm(s, 'Tree', { horizontal_margin: 100 })

s = SelectNodes(root)
Clump(s)

LabelIdentifier(s)

let to_label = [root]

while (to_label.length > 0) {
    let n = to_label.shift()

    if (n.children == null) continue

    for (let i = 0; i < n.children.length; i++) {
        s = Select(n, n.children[i])
        s = SpanSelection(s)
        LabelEdge(s, n.children[i].edge)

        to_label.push(n.children[i])
    }
}
