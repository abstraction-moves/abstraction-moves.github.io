let s = null

let layout = [str, ast]
Display(layout)

s = Select(layout)
SetVisualForm(s, 'Sequence', { style: 'Space Separated', orientation: 'Vertical' })

s = Select(str)
SetVisualForm(s, 'Sequence', { style: 'Space Separated', quote_on_string: false, margin: 2 })

s = Select(ast)
SetVisualForm(s, 'Tree')

s = SelectNodes(ast)
Clump(s)

Label(s, (d) => d.text)

let s2 = null
for (let i = 0; i < nodes.length; i++) {
    s = Select(nodes[i])
    s2 = Select(str[nodes[i].loc])
    Connect(s2, s, { directed: false })
}
