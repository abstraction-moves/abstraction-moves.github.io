let s = null
Display(Var('buckets'))

s = Select(buckets)
SetVisualForm(s, 'Graph', { pointer_graph: true })

SetVisualForm(Select(buckets), 'Sequence', { style: 'Blocks', orientation: 'Vertical' })

s = SelectByValue(buckets, (v) => v == null)
Clump(s)

s = Select(...buckets, { resolve_pointers: false })
LabelLocation(s, { placement: 'left', show_braces: false })
