let s = null
Display(Var('dom'))

s = Select(dom)
SetVisualForm(s, 'Tree', { orientation: 'Horizontal' })

s = SelectNodes(dom)
Clump(s)

Label(s, (d) => d.kind)

s = SelectByCondition(dom, (v) => v.dirty == true)
Label(s, '*', { placement: 'right', show_braces: false })
