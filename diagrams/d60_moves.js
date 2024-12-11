let s = null
Display(ast)

s = Select(ast)
SetVisualForm(s, 'Graph', { pointer_graph: true, orientation: 'Horizontal' })

s = SelectNodes(ast)
SetVisualForm(s, 'Hierarchy', { style: 'Bordered' })
