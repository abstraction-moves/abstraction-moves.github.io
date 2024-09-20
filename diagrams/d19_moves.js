let s = null
Display(L)

s = Select(L)
SetVisualForm(s, 'Sequence', { style: 'Blocks' })

let cutoff = 6

s = SelectByCondition(L, (v) => v == null)
Clump(s)

s = Select(...L)
LabelLocation(s, { placement: 'top', show_braces: false })

s = Select(L[stackTop])
Label(s, 'stackTop', { placement: 'bottom', push_layout: false })

s = Select(L.slice(cutoff))
s = SpanSelection(s)
Abbreviate(s)
