let S = { u, w, r, v, t, z, j, x, y, i }
Display(S)

let s = Select(S)
SetVisualForm(s, 'Graph', { pointer_graph: true, multi_pointer: true, show_labels: false, orientation: 'Horizontal' })

let pointers = Object.values(S).map((v) => v.data)

s = Select(pointers)
Clump(s)
LabelIdentifier(s, (name) => `${name.split('.')[0]}`)

s = Select(u, v)
s = SpanSelection(s)
Style(s, {
    'stroke-dasharray': '4 4',
})

Remove(s)
