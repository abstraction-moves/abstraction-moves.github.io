let s = null
Display(ast)

s = Select(ast)
Revisualize(s, 'Graph', { pointer_graph: true, orientation: 'Horizontal' })

s = SelectNodes(ast)
Revisualize(s, 'Hierarchy', { style: 'Bordered' })
