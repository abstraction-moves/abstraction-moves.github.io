Display(T)
let s = Select(T)

Revisualize(s, 'Tree', { horizontal_margin: 35, vertical_margin: 35 })

s = SelectNodes(T)
Clump(s)

s = Select(T, T.right)
s = SpanSelection(s)
Encircle(s, { background: 'lightyellow' })
